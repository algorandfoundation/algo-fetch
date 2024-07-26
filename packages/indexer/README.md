
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.12.0/api/indexer.oas3.yml). 
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

# Overview
Support for Mac with ARM arcitecture, new data directory for future caching optimizations, upgrade golang compiler to 1.17.

# Highlights

## Indexer Data Directory

In an effort to consolidate configuration, and create a location for more sophisticated caching, there is a new data directory parameter. The data directory is required and can be specified with one of the following:
* Command line flag `-i` or `--data-dir`
* YAML file field: `data`
* Environment variable: `INDEXER_DATA`

# What's New
* Data directory support, `--data-dir` flag is now a required argument
* golang upgraded to 1.17

# Changelog
## New Features
* Developer Tools: create indexer data dir ([#991](https://github.com/algorand/indexer/pull/991))
* New Feature: Adds Data Directory Support ([#1012](https://github.com/algorand/indexer/pull/1012))
## Enhancements
* Build: Update for Mac M1 support ([#980](https://github.com/algorand/indexer/pull/980))
* Ci: switch to codecov github action ([#995](https://github.com/algorand/indexer/pull/995))
* Tests: Add tests for account asset amount validation. ([#994](https://github.com/algorand/indexer/pull/994))
* Lock to mockery minor version (#1038)(https://github.com/algorand/indexer/pull/1038))
## Bugfixes
* API: return empty lists from fetchApplications and fetchAppLocalStates ([#1010](https://github.com/algorand/indexer/pull/1010))
* API Model: Update model to converge with algod ([#1005](https://github.com/algorand/indexer/pull/1005))
* Ci: add version to golint install command. ([#1000](https://github.com/algorand/indexer/pull/1000))

## Not Yet Enabled
* Developer Tools: indexer block processor ([#982](https://github.com/algorand/indexer/pull/982))

## New Contributors
* @erer1243 made their first contribution in https://github.com/algorand/indexer/pull/1010

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)