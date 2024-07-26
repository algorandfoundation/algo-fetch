
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.8.1/api/indexer.oas3.yml). 
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
* Even more enhancements to optimize import performance.
* Query optimization for certain problematic queries.
* Bug fixes for special cases.

# Enhancements
* Preload asset/app creators before evaluation (#749)
* Delete `txnbytes` column (#772)
* Import validation tool implementation (#775)
* Update sigtype along with the rest of account data (#783)
* Increase balance of genesis accounts to 1 billion algos (#792)
* Prepare and write txn rows in parallel (#802)
* Format schema sql (#803)
* Write into `txn` and `txn_participation` tables in parallel with other import procedures (#805)
* Upgrade golang to 1.16 (#806)
* Write transactions earlier if possible (#807)
* Updating readme for postgres 13 and AZ note (#810)
* Add a readme for import validator (#811)
* Better context usage (#817)
* Create Python Test for Generated Files (#829)

# Bug Fixes
* Modify outer left join query to use existing index. (#822)
* Add retry loop to block handler. (#823)
* Add `IndexerDb.Close()` (#801)
