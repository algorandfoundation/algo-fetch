
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.6.3/api/indexer.oas3.yml). 
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

# An Important Note
This release contains an _urgent_ fix for challenges experienced with 2.7.1 and prior versions on the 2.7.x line. It enables support for the V3 consensus upgrade, and hence we encourage everyone to either downgrade from a 2.7.x release or upgrade from prior 2.6.x releases. 

Re-indexing is not necessary; data recorded by a 2.7.x indexer is compatible with this release.

# Highlights

- Support AVM for V3 consensus upgrade for go-algorand off indexer 2.6.x line

## Added
- Consensus protocol 3.0.0 support (#698)
- Backport AVM 1.0 DB support (#699)

## Changed
- Encode the address in code instead of in the DB. (#708)
- Backport REST API changes. (#707)

## Fixed
- Non-AVM hot fixes from main line addressing timeout handling and extra program pages. (#704)