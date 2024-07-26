
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.6.6/api/indexer.oas3.yml). 
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

# Important Notice

**This is a maintenance release. Do not install this over 2.8.0.**

# Highlights

A bug in the 2.6.5 release caused indexer to crash with the following error on Testnet:

```
{"error":"error in account type, previously had type lsig but got sig","level":"error","msg":"txn
accounting r=18759726 i=8, error in account type, previously had type lsig but got
sig","time":"2021-12-30T03:33:54Z"}
```

This issue was already fixed in 2.8.0. This hot fix will allow people to continue to run on the 2.6.x release.

# Bug Fixes
* Allow unexpected changes to sig type cache. (#814)
