const fs = require("fs");


const run = async () => {
  const version = process.argv[2];
  console.log("Regenerating for version:", version);
  if (!version) {
    throw new Error("Please provide a version number, e.g. v0.1.0");
  }
  const files = [
    {
      destination: "./openapi/blockexplorer.openapi.json",
      source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/${version}/blockexplorer.openapi.json`,
    },
    {
      destination: "./openapi/transaction.openapi.json",
      source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/${version}/transaction.openapi.json`,
    },
    {
      destination: "./openapi/corestate.openapi.json",
      source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/${version}/corestate.openapi.json`,
    },
    {
      destination: "./openapi/trading_data_v2.openapi.json",
      source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/${version}/trading_data_v2.openapi.json`,
    },
    {
      destination: "./openapi/wallet.openapi.json",
      source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/${version}/wallet.openapi.json`,
    },
  ];
  for (const file of files) {

    console.log(`Fetching ${file.source}`);

    const response = await fetch(file.source);
    const data = await response.json();
    fs.writeFileSync(file.destination, JSON.stringify(data, null, 2));
  }
};
run()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
