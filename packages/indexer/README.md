
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.8.2/api/indexer.oas3.yml). 
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

* Verify existing database matches algod
* CLI option to provide configuration file with `--configfile`
* Rollback to earlier golang

# Enhancements

* Add CLI option for providing configfile. (#824)
* Add startup check to verify existing DB data matches the algod network. (#833)

# Bug Fixes

* Remove duplicate inner transactions from blocks endpoint. (#840)
* Update golint dependency in go mod and sum files. (#844)
* Revert golang 1.16 upgrade (#841)
* Set go-algorand submodule to v3.2.3-stable commit. (#851)
