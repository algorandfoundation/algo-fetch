
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.4.0/api/indexer.oas3.yml). 
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

This release addressed technical debt identified in previous releases.

Migrations in this release take around half an hour and are non-blocking, and include:

- Cleaning up some stale account data for a small number of accounts which were closed and re-opened after rekeying, registering participation keys, or changing their online status
- Search by freeze address filter fix

# Changes

## Bug Fixes
- Converting GT/LT uint struct fields to uint pointers
- Delete false error message in daemon when starting from round 0
- Fix Freeze Address Search Filter + Migration
- Fix idb/mocks/IndexerDb.go regeneration
- Migration that clears account data for accounts that have been closed
- Retry db transactions on a serialization error
- Return the right close amount for transfer transactions.
