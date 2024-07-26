
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.15.3/api/indexer.oas3.yml). 
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
FOR REVIEW ONLY: indexer 2.15.3 into master

![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

<!-- Release notes generated using configuration in .github/release.yml at 2.15.3 -->

## What's Changed
### Bugfixes
* local ledger: Ignore duplicate genesis block adds. by @winder in https://github.com/algorand/indexer/pull/1442


**Full Changelog**: https://github.com/algorand/indexer/compare/2.15.2...2.15.3