
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.9.0/api/indexer.oas3.yml). 
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
This release enables support for the V31 go-algorand consensus upgrade.


## What's New
- Contract to contract support
- Support for StateProof keys

## New Features

- Support StateProof keys. (#778)
- Return Inner and Root transactions for nested logs support in C2C calls (#820)

## Enhancement

- block-generator: Improve payment algorithm to allow sending many more transactions. (#864)
- Include import-validator as a hidden algorand-indexer subcommand. (#871)
- Update go-algorand submodule to latest C2C changes (#874)
- Re-enable e2e test. (#881)
- Update submodule to head of rel/beta (#882)

## Bug Fixes
- Fix log permissions to not be executable. (#880)
- Ensure query is canceled after account rewind. (#893)
