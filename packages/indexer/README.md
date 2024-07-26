
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.1.1/api/indexer.oas3.yml). 
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
## Highlights

* Support for Stateful Smart Contracts
* Support for Rekeying
* Miscellaneous updates and fixes

## Changes
* New Features
  * support stateful smart contracts (#88)
  * more Applications API
  * import Applications/Stateful-TEAL data and make available through the API
  * support rekeying (#71)
  * track opt-in asset transactions (#59)
* Enhancements
  * config file for daemon (#99)
  * better logging for indexer import to self-report performance (#97)
  * rename algobot -> fetcher (#104)
  * lowercase the package name
  * pipeline cleanup
  * test indexer following live algod; returning a txn by txid (#126)
  * add mutually-exclusive field
  * update readme with postgres version requirements
  * merge ApplicationLocalStates and ApplicationLocalState
  * capture output from indexer and only show it on error
  * fill in app transaction fields in REST response
  * add foreignApps field to application
  * implement IndexerDB Rekey Filters (#90)
  * added 'pretty' parameter to all API endpoints to pretty print the JSON response (#122)
  * expand validation to check asset configs inside their creating accounts (#157)
  * update protocols for applications and re-key
  * config file for daemon (#99)
  * update indexer mule.yaml files to use new agent syntax
  * compile in version information: time, git hash, version tag
  * update README to add `algorand` user requirement (#111)
* Bug Fixes
  * import speedup and rewind fix (#106)
  * update README systemd example to properly override ExecStart
  * fix demo curl urls, add /health (#112)
  * fix docker files and readme commands
  * transaction searches on Assets fails (#117)
  * run test indexer on a settable or random port so it doesn't collide with an established indexer; msgpack updates
  * make test more flexible and explicit about finding algorand-indexer
  * add api token to indexer to be compatible with py-algorand-sdk
  * remove leading ./ from packaging hashes file
  * remove psycopg2 dependency and obsolete test mode (#139)
  * fix txid migration warning
  * lots of small fixes
  * don't present pending rewards for NonParticipating accounts (#148)
  * fix accounting of changes to asset config (#152)
  * migration to repair asset configs from their original transaction data
  * enforce --no-algorand flag read only mode to better support replicated postgres (#181)
  * add auth addr to account
