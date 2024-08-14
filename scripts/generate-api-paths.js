const fs = require("fs");
const _ = require("lodash");

const run = async () => {
  const files = [
    {
      source: "./openapi/trading_data_v2.openapi.json",
      destination: "./paths/trading_data_v2.json",
    },
  ];

  for (const f of files) {
    console.log("Generating API paths from ", f.source);
    const data = JSON.parse(fs.readFileSync(f.source).toString()).paths;

    const paths = Object.entries(data)
      .map(([path, config]) => {
        let pathParameters = [];

        const parameters = _.get(config, "get.parameters");
        if (parameters && Array.isArray(parameters)) {
          pathParameters = _.compact(
            parameters.map((p) => {
              if (p.in === "path") return p.name;
              return undefined;
            })
          );
        }

        return [path, pathParameters];
      })
      .reduce((acc, [k, v]) => {
        console.log("path", k);
        acc[k] = v;
        return acc;
      }, {});

    fs.writeFileSync(f.destination, JSON.stringify(paths, null, 2));
  }
};

run()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
