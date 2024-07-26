
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.2.0/api/indexer.oas3.yml). 
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
![GitHub Logo](https://www.algorand.com/static/link-grid-bottom-252785b210330feb4966f54fc17cc7cc.jpg)

## Highlights

This is a quality of life release, improving and enhancing core code.

* Added migration status to health, and ability to delay startup for future migrations that need it
* Configuration files management implemented with viper
  Note: parameters can be set as arguments or environment variables. If using a config file, the config file must now be named indexer, indexer.yml, or indexer.yaml, and be in a specific location. See README for more details.
* Other performance improvements and enhancements

## Changes

* New Feature - Add migration status to /health endpoint
* Enhancements
  * Add API performance benchmarking (#143)
  * Allow some migrations to prevent indexer from starting up until they complete (#188)
  * Return version when called with -v flag (#191)
  * Use viper to manage configuration files/environment variables
  * Add '/v2/transactions/{txid}' endpoint (#164)
  * Move the import logic into the import package
  * Tighten up package dependencies
  * Improve account list with asset filter (#222)
  * Change fetcher to use algod API V2 (#147)
  * Naming cleanup
* Bug Fixes
  * Fix Debian unattended upgrade channel bug (#185)
  * Fix unpacking of transaction extra data
  * Remove travis token from status image
