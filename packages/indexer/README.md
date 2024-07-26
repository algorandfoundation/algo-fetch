
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.14.0/api/indexer.oas3.yml). 
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

<!-- Release notes generated using configuration in .github/release.yml at 2.14.0 -->

## What's Changed
### Bugfixes
* Fix bug in reveals lookup by @michaeldiamant in https://github.com/algorand/indexer/pull/1198
* test fixes: Submodule updates by @Eric-Warehime in https://github.com/algorand/indexer/pull/1144
* Bug-Fix: Implement BlockHdrCached + miscellany by @tzaffi in https://github.com/algorand/indexer/pull/1162
* Stop Panics if no config is supplied by @AlgoStephenAkiki in https://github.com/algorand/indexer/pull/1180
### New Features
* state proofs: Initial commit for stateproofs model by @Eric-Warehime in https://github.com/algorand/indexer/pull/1002
### Enhancements
* Enhancement: remove import validator utility and obsolete ledger for evaluator by @tzaffi in https://github.com/algorand/indexer/pull/1146
* Enhancement: Format misc/*.py with `black` by @tzaffi in https://github.com/algorand/indexer/pull/1153
* Enhancement: apply black to e2elive.py as well by @tzaffi in https://github.com/algorand/indexer/pull/1154
* Enhancement: More information about S3 keys searched for and Dockerfile that uses submodule instead of channel by @tzaffi in https://github.com/algorand/indexer/pull/1151
* Enhancement: add max int64 checks by @shiqizng in https://github.com/algorand/indexer/pull/1166
* Add support for new block header: TxnRoot SHA256 by @Aharonee in https://github.com/algorand/indexer/pull/989
### Other
* Fix spec name collisions. by @winder in https://github.com/algorand/indexer/pull/1182
* Update go-algorand submodule to v3.9.1-beta by @onetechnical in https://github.com/algorand/indexer/pull/1185
* Disable deadlock detection by @winder in https://github.com/algorand/indexer/pull/1186
* Devops: Bump go-algorand submodule to v3.9.2-beta by @onetechnical in https://github.com/algorand/indexer/pull/1203

## New Contributors
* @Aharonee made their first contribution in https://github.com/algorand/indexer/pull/989

**Full Changelog**: https://github.com/algorand/indexer/compare/2.13.0...2.14.0