
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.2.1/api/indexer.oas3.yml). 
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
![GitHub Logo](https://www.algorand.com/static/link-grid-bottom-252785b210330feb4966f54fc17cc7cc.jpg)

## Highlights

A performance issue was identifies in queries to the /v2/accounts endpoint, so the query was optimized.

## Changes

- Bug Fixes
  - Fix for long /v2/accounts queries (#248)
  - Typo in README.md postgress connection string (#245)
