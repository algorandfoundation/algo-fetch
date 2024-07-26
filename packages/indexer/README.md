
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.11.2/api/indexer.oas3.yml). 
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

## Important Note

We are providing the 2.11.2 version because there are additional implementation requirements introduced in 2.12.x. Please refer to documentation for details:

https://github.com/algorand/indexer#data-directory

## Overview
Bugfix to ignore malformed resources.

## What's Changed
* Bugfix: filter malformed resources


**Full Changelog**: https://github.com/algorand/indexer/compare/2.11.1...2.11.2