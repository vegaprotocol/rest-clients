# Rest clients

WIP project that autogenerates types and clients for interacting with the Vega REST APIs

## Usage

Install the client you wish to use:

```bash
npm i @vegaprotocol/rest-clients
```

or

```bash
yarn add @vegaprotocol/rest-clients
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
