
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.3.4/api/indexer.oas3.yml). 
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

This release adds support for an upcoming protocol upgrade, as well as
fixes the following migration issues for people upgrading from 2.2.x to 2.3.x:

- The migration may have exited with the following error. `update account asset, pq: null value in column \"frozen\" violates not-null constraint`
- The migration may have completed, but be stuck in error status, reporting `error during migration 7 (Compute cumulative account rewards for all accounts.): m7: len(assetDataMap): 77 \u003e 0`

# Changes

## Enhancement
- Update consensus params to support V27
## Bug Fixes
- Fix frozen null-constraint during import
- Delete assets from asssetDataMap in migration when updating accounts
