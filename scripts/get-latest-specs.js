const fs = require("fs");

const version = "0.76.0";

const FILES = [
  {
    destination: "./openapi/blockexplorer.openapi.json",
    source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/blockexplorer.openapi.json`,
  },
  {
    destination: "./openapi/core.openapi.json",
    source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/core.openapi.json`,
  },
  {
    destination: "./openapi/corestate.openapi.json",
    source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/corestate.openapi.json`,
  },
  {
    destination: "./openapi/trading_data_v2.openapi.json",
    source: `https://raw.githubusercontent.com/vegaprotocol/documentation/main/specs/v${version}/trading_data_v2.openapi.json`,
  },
];
const run = async () => {
  for (const file of FILES) {
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
