
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.5.0/api/indexer.oas3.yml). 
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

# Highlights

This is a small release to support the upcoming algod protocol upgrade. **This upgrade is necessary for running go-algorand 2.7.0 / 2.7.1 releases.**

This release also includes miscellaneous small fixes and refactoring, as well as additional performance testing tools.

This release contains a couple small migrations as part of data cleanup, which should take less than a minute to complete.

# Changes

## New Features

- Add ExtraProgramPages app call field support
- Performance testing: block generator and reporting
- Prometheus metrics endpoint for performance testing

## Enhancements
- Add install instructions
- Code cleanups and refactoring
- Make `deleted` columns NOT NULL
- Update protocols.json to v28
- Add codecov integration

## Bug Fixes
- Creatable ID is wrong on round 0
- Fix usage of e2e_client_runner.py
- Replace `GetMaxRoundLoaded()` with `GetNextRoundToLoad()`
- Return an error in `CommitRoundAccounting()` when import state is uninitialized

