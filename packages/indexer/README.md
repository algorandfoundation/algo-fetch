
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.12.1/api/indexer.oas3.yml). 
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
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)<br /><br />

## Overview
Hotfix release to fix bug to pass in a config filename in the same path as the indexer data directory. 

## What's Changed
* docs: Add some missing options to the config mapping table. by @winder in https://github.com/algorand/indexer/pull/1037
* Bugfix: Correctly auto loads config file by @AlgoStephenAkiki in https://github.com/algorand/indexer/pull/1053


**Full Changelog**: https://github.com/algorand/indexer/compare/2.12.0...2.12.1