
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.10.0/api/indexer.oas3.yml). 
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

# Important Note

A database migration is included in this release. This has been timed to a few minutes on testnet, and about half an hour for mainnet (on a db.r5.xlarge RDS instance). We recommend running this upgrade in a non-live environment to allow the migration to finish before putting in service.

The /v2/account endpoints may now return a 400 error if the total number of account assets and apps opted into or created by an address in the response exceeds the limit. The current default is 1000.

This release also contains consensus support for the upcoming go-algorand v3.5.1-stable release.

# Highlights

## Unlimited Assets & Applications

Add support for unlimited assets. ([#900](https://github.com/algorand/indexer/pull/900))

Accounts can create and opt into an unlimited number of assets and applications in the next go-algorand release. The REST API endpoints have changed to make it easier to work with more data:

* [GET /v2/accounts](https://github.com/algorand/indexer/blob/46a10993bd5028e1564b8ae87e528e050782a1fa/api/indexer.oas2.json#L43)
* [GET /v2/accounts/{account-id}](https://github.com/algorand/indexer/blob/46a10993bd5028e1564b8ae87e528e050782a1fa/api/indexer.oas2.json#L104)
  * Account endpoints may exclude the attached resources with a new “**exclude=(all|assets|created-assets|apps-local-state|created-apps)**” parameter, which defaults to “none”.
  * A new configuration parameter, max-api-resources-per-account, will configure the indexer to return 400 for /v2/accounts/{address} and /v2/accounts, if the total number of account assets and apps opted into or created by an address in the response exceeds the limit. The current default is 1000. Some providers may change this behavior, if you are using Indexer as a service check with your provider’s documentation.
* [GET /v2/accounts/{account-id}/assets](https://github.com/algorand/indexer/blob/46a10993bd5028e1564b8ae87e528e050782a1fa/api/indexer.oas2.json#L147)
* [GET /v2/accounts/{account-id}/created-assets](https://github.com/algorand/indexer/blob/46a10993bd5028e1564b8ae87e528e050782a1fa/api/indexer.oas2.json#L193)
* [GET /v2/accounts/{account-id}/apps-local-state](https://github.com/algorand/indexer/blob/46a10993bd5028e1564b8ae87e528e050782a1fa/api/indexer.oas2.json#L239)
* [GET /v2/accounts/{account-id}/created-applications](https://github.com/algorand/indexer/blob/46a10993bd5028e1564b8ae87e528e050782a1fa/api/indexer.oas2.json#L285)
  * Resources may be fetched by their type with new dedicated endpoints which have pagination support.

# Changelog
* Fix dev mode by addressing off by one error. ([#920](https://github.com/algorand/indexer/pull/920))
* Enable validation and acceptance of new parameter configuration ([#912](https://github.com/algorand/indexer/pull/912))
* Revert imported_tx_per_block change and add new imported_txns gauge. ([#913](https://github.com/algorand/indexer/pull/913))
* Update e2e_subs docs to revise artifact upload process ([#910](https://github.com/algorand/indexer/pull/910))
* Document instructions for updating indexer e2e test input ([#906](https://github.com/algorand/indexer/pull/906))
* Allow viewing of disabled params ([#902](https://github.com/algorand/indexer/pull/902))
* Fix failing e2e test ([#899](https://github.com/algorand/indexer/pull/899))
* Monitoring dashboard ([#876](https://github.com/algorand/indexer/pull/876))
* Disable parameters in rest api ([#892](https://github.com/algorand/indexer/pull/892))
* Ensure query is canceled after account rewind. ([#893](https://github.com/algorand/indexer/pull/893))
* Temporarily revert to inline glob search ([#889](https://github.com/algorand/indexer/pull/889))
* Configurable query parameters runtime data structures. ([#873](https://github.com/algorand/indexer/pull/873))
* Bugfix: Return all inner transactions are returned for logs endpoint. ([#915](https://github.com/algorand/indexer/pull/915))
* Default to including python go: Algorand e2e tests in buildtestdata.sh ([#888](https://github.com/algorand/indexer/pull/888))
* Feature: Add support for unlimited assets. ([#900](https://github.com/algorand/indexer/pull/900))
* Include block-generator and validator as algorand: Indexer subcommands. ([#891](https://github.com/algorand/indexer/pull/891))
* Release preparation: Feature flag to disable configurable api parameters. ([#917](https://github.com/algorand/indexer/pull/917))
* Tools: Add cli doc generation command. ([#919](https://github.com/algorand/indexer/pull/919))
* Use fetch/reset instead of pull for go: Algorand in nightly test. ([#885](https://github.com/algorand/indexer/pull/885))

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)