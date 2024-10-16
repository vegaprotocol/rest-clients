# Rest clients

WIP project that autogenerates types and clients for interacting with the Vega REST APIs

## Bumping the version

```bash
yarn
node ./scripts/get-latest-specs.js v0.79.0
yarn generate:all
node ./scripts/generate-api-paths.js
```

then tag with the vega version (in the above example it's 0.79.0)

## Usage

Install the client you wish to use:

```bash
npm i @vegaprotocol/rest-client
```

or

```bash
yarn add @vegaprotocol/rest-client
```

Then use it in your code:

```typescript
// Choose API you wish to access; BlockExplorer, Core, CoreState or TradingData
import { BlockExplorer } from "@vegaprotocol/rest-clients";

// Set the base URL of for the client you are connecting to.
BlockExplorer.OpenAPI.BASE = "node-url-here";
const service = BlockExplorer.BlockExplorerService;
service.blockExplorerListTransactions().then((markets) => {
  console.log(markets);
});
```
