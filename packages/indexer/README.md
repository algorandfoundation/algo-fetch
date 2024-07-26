
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.15.2/api/indexer.oas3.yml). 
See the [upstream repository](https://github.com/algorand/indexer) for more information.

## Installation

```bash
npm install @awesome-algorand/indexer-fetch --save
```

### Usage

```typescript
import {IndexerClient} from '@awesome-algorand/indexer-fetch';

const client = new IndexerClient({
    BASE: 'https://testnet-idx.algonode.cloud/',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/indexer/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)<br /><br /><h2> Highlights</h1>

<h2> Changes</h2>

Bugfix for "transaction rejected by ApprovalProgram" error.

## What's Changed
### Other
* Update submodule to 3.13.3 by @winder in https://github.com/algorand/indexer/pull/1427


**Full Changelog**: https://github.com/algorand/indexer/compare/2.15.1...2.15.2