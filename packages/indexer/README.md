
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.12.3/api/indexer.oas3.yml). 
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
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

## Overview
2.12.2 release pre-maturely deprecated Ubuntu 18.04. We decided to roll-back our build environment to ubuntu 18.04 so we can continue supporting 18.04 until around fall this year. 

Please reference [2.12.2](https://github.com/algorand/indexer/releases/tag/2.12.2) and [2.12.0](https://github.com/algorand/indexer/releases/tag/2.12.0) for the changes to be aware of regarding the configuration files and the required `data-dir` support.

## What's Changed
* Revert: update ubuntu from 18.04 to 20.04 (#1072) by @algobarb in https://github.com/algorand/indexer/pull/1080


**Full Changelog**: https://github.com/algorand/indexer/compare/2.12.2...2.12.3