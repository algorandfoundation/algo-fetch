
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.14.2/api/indexer.oas3.yml). 
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
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)<br />

<!-- Release notes generated using configuration in .github/release.yml at 2.14.2 -->

## What's Changed
### Bugfixes
* fix: use CI_E2E_FILENAME in s3 prefix  by @shiqizng in https://github.com/algorand/indexer/pull/1255
* Bug-Fix: Update go-algorand Submodule and Wrap Ledger in MakeNewCatchpointCatchupAccessor by @tzaffi in https://github.com/algorand/indexer/pull/1257
* Bugfix: Fix configuration of logger (#1259) by @AlgoStephenAkiki in https://github.com/algorand/indexer/pull/1269
* DevOps: Update go-algorand submodule to v3.11.2-beta by @onetechnical in https://github.com/algorand/indexer/pull/1286
### Enhancements
* testing: Validator improvements. by @winder in https://github.com/algorand/indexer/pull/1282


**Full Changelog**: https://github.com/algorand/indexer/compare/2.14.1...2.14.2