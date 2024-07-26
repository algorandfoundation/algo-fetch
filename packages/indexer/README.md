
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.8.4/api/indexer.oas3.yml). 
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

# Important Notice

You cannot upgrade from indexer versions less than 2.8.0.  Please see [indexer 2.8.0 release notes](https://github.com/algorand/indexer/releases/tag/2.8.0) for details. Upgrading from 2.8.0 to 2.8.3 is fully supported.

**We will not be supporting indexer < 2.8.0 in future consensus releases.**

# Highlights

* New limits for applications endpoint

## New Features

* Nightly Tests: compare2algod in addition to the regular tests

# Enhancements

* Add default and max limits for applications endpoint.
 
# Bug Fixes
* block-generator: Add README.
* Adding slack notifications to builds
