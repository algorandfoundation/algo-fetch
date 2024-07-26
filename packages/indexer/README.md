
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.15.4/api/indexer.oas3.yml). 
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
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)<br /><br />
## Highlights

* Support for go-algorand v3.16.0
* Better support for address encodings.

<!-- Release notes generated using configuration in .github/release.yml at 2.15.4 -->

## What's Changed
### Enhancements
* Update submodule and avm-abi dependency. by @winder in https://github.com/algorand/indexer/pull/1509
* encoding: Better support for address encodings. by @winder in https://github.com/algorand/indexer/pull/1531

### Bug Fixes
* tests: Fix tests with app and asset ID less than 1000. by @winder in https://github.com/algorand/indexer/pull/1532

**Full Changelog**: https://github.com/algorand/indexer/compare/2.15.3...2.15.4