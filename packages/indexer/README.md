
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.8.3/api/indexer.oas3.yml). 
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

You cannot upgrade from indexer versions less than 2.8.0.  Please see [indexer 2.8.0 release notes](https://github.com/algorand/indexer/releases/tag/2.8.0) for details. Upgrading from 2.8.0 to 2.8.3 is fully supported.

**We will not be supporting indexer < 2.8.0 in future consensus releases.**

# Migration

This release contains a small migration to drop the deprecated `txnbytes` column. In our testing this completed within a few seconds. We recommend running a full vacuum afterwards to reclaim space in the database, though the full vacuum may take a long time.

# Highlights

* New option to specify max database connections using `--max-conn`
* Verify existing database matches algod
* CLI option to provide configuration file with `--configfile`
* Even more enhancements to optimize import performance.
* Query optimization for certain problematic queries.
* Bug fixes for special cases.
* Rollback to earlier golang.

## New Features

* Add database max connections configuration option (#837)

# Enhancements

* Preload asset/app creators before evaluation (#749)
* Delete `txnbytes` column (#772)
* Update sigtype along with the rest of account data (#783)
* Prepare and write txn rows in parallel (#802)
* Format schema sql (#803)
* Write into `txn` and `txn_participation` tables in parallel with other import procedures (#805)
* Upgrade golang to 1.16 (#806)
* Write transactions earlier if possible (#807)
* Updating readme for postgres 13 and AZ note (#810)
* Better context usage (#817)
* Create Python Test for Generated Files (#829)
* Add CLI option for providing configfile. (#824)
* Add startup check to verify existing DB data matches the algod network. (#833)
* Add additional encoding tests. (#853)

# Bug Fixes

* Modify outer left join query to use existing index. (#822)
* Add retry loop to block handler. (#823)
* Add `IndexerDb.Close()` (#801)
* Remove duplicate inner transactions from blocks endpoint. (#840)
* Update golint dependency in go mod and sum files. (#844)
* Revert golang 1.16 upgrade (#841)
* Set go-algorand submodule to v3.2.3-stable commit. (#851)
* Add genesis hash check to import (#842)
* Fix network validation during database upgrade case. (#856)
