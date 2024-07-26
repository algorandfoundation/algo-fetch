
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.8.0/api/indexer.oas3.yml). 
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

**NOTE: This release of the indexer REQUIRES a full rebuild with a new database.**

Indexer 2.8.0 is NOT backward compatible with 2.6.5 and must be rebuilt with a new database. This release contains significant changes to unify the accounting logic used by Indexer and Algod. A side effect of this work is that data from earlier releases do not work for the new release. If you attempt to upgrade an older database, Indexer will exit with an error.

We made this decision to simplify maintenance long-term of keeping Indexer and Algod's accounting consistent.

# Highlights
* Complete overhaul of indexer accounting.
* Enhancements to import performance.
* Bug fixes for special cases

# Enhancements
* Add a migration telling the user that upgrading to this version is not supported. (#711)
* Add error msg in rewind about inner txns. (#780)
* Add version to health endpoint. (#756)
* Adding HTTP Error responses to documentation. (#666)
* Return a 404 status code instead of 500 when a block is not found. (#719)
* Cleanup in the DB schema (#714, #717, #718)
* Support special accounts. (#746)
* Support search by zero address. (#771)
* Encode teal key-value as map in JSON (#755)
* Fetch block concurrently with import (#668)
* Improve DB indexes for better worst case accounting time (#760)
* Inner Transaction Support (#684, #721)
* Return extra program pages in app params (#696)
* Use integer for root intra in TxnExtra (#763)
* Use our own JSON handle for decoding (#765)
* Write app call addresses in txn_participation table (#770)

# Bug Fixes
* Add a check in idb.DecodeTxnRowNext() to prevent indexer crash (#796)
* Clear out error in catchup loop (#689)
* Display b64 fields if their content is zero bytes (#785)
* Move timeout handling into handlers. (#786)
* Return TotalAppSchema and TotalExtraAppPages from AccountData (#784)

