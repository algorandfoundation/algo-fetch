
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.12.2/api/indexer.oas3.yml). 
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
Hotfix release to fix auto loading search and config loading errors with the new data directory. This simplifies the configuration file auto-searching feature and limits it to the new data directory (data-dir). If you are currently using the auto-searching feature, please move the `indexer.yml` and `api_config.yml` file into the data-directory introduced in [**2.12.0**](https://github.com/algorand/indexer/releases/tag/2.12.0). 

We encourage users to run indexer outside of the data-directory since we intend to populate the data-directory with a local ledger in future releases.

## Highlight
This fix removes the odd behavior and errors observed when passing in an indexer configuration file path or api configuration file path while auto-discovery is on for both the current working directory and the data directory.

## Bug Fix
* Bug Fix: Fix auto-loading search by @AlgoStephenAkiki in https://github.com/algorand/indexer/pull/1065

## Misc
* DevOps: Add labels to Github Actions PR label check by @algobarb in https://github.com/algorand/indexer/pull/1060
* DevOps: update dockerfile ubuntu from 18.04 to 20.04 by @algobarb in https://github.com/algorand/indexer/pull/1072


**Full Changelog**: https://github.com/algorand/indexer/compare/2.12.1...2.12.2