
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.14.1/api/indexer.oas3.yml). 
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

<!-- Release notes generated using configuration in .github/release.yml at 2.14.1 -->

## What's Changed
### Bugfixes
* Bug:  Fix bug in reveals lookup by @michaeldiamant in https://github.com/algorand/indexer/pull/1198
* build: Downgrade mockery to prevent incorrect deprecation warning. by @winder in https://github.com/algorand/indexer/pull/1211
### New Features
* Config: Accept yaml and yml configuration files. by @AlgoStephenAkiki in https://github.com/algorand/indexer/pull/1181
### Enhancements
* Testing: Add a sample state proof with high index for testing by @algoidan in https://github.com/algorand/indexer/pull/1199
* enhancement: Clarify REST query parameters for accounts search by @shiqizng in https://github.com/algorand/indexer/pull/1201
* Enhancement: update e2e test policy by @shiqizng in https://github.com/algorand/indexer/pull/1197
* enhancement: adding ParticipationUpdates to response by @shiqizng in https://github.com/algorand/indexer/pull/1215
* REST API: Add Header-Only parameter to blocks endpoint, return error if there are too many transactions. by @shiqizng in https://github.com/algorand/indexer/pull/1241

## New Contributors
* @algoidan made their first contribution in https://github.com/algorand/indexer/pull/1199
* @algolucky made their first contribution in https://github.com/algorand/indexer/pull/1169

**Full Changelog**: https://github.com/algorand/indexer/compare/2.14.0...2.14.1