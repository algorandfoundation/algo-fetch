
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.13.0/api/indexer.oas3.yml). 
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

## Important Notice

A new `--catchpoint` option should be provided when upgrading from an earlier version of Indexer, or provisioning a new writer for an existing database. This option will run a fast catchup routine that initializes the data directory. [Detailed instructions are available here](https://github.com/algorand/indexer/blob/2.13.0/docs/DataDirectory.md#initialization).

This process may take 30 minutes or more.

## Highlights

### Local account cache

In this release, we have added an account cache to the Indexer data directory. It is used during block processing to optimize internal data access. Processing is now simpler, faster, and no longer depends on postgres.

For more details, refer to the [Data Directory documentation](https://github.com/algorand/indexer/blob/2.13.0/docs/DataDirectory.md).

## What's Changed
### Enhancements
* Github-Actions: Updating pr label check by @algojack in https://github.com/algorand/indexer/pull/1078
* RFC-0001: Rfc 0001 impl by @Eric-Warehime in https://github.com/algorand/indexer/pull/1069
* Enhancement: Use local ledger instead of postgres for account cache by @winder in https://github.com/algorand/indexer/pull/1085
### Not Yet Enabled
* RFC: Add exporter interface RFC by @Eric-Warehime in https://github.com/algorand/indexer/pull/1061
### Other
* Documentation for data directory. by @winder in https://github.com/algorand/indexer/pull/1125
* Don't lookup big foreign assets. by @winder in https://github.com/algorand/indexer/pull/1141
* Fix import performance test runner. by @winder in https://github.com/algorand/indexer/pull/1133


**Full Changelog**: https://github.com/algorand/indexer/compare/2.12.4...2.13.0