
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.11.1/api/indexer.oas3.yml). 
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
## Configuring Query Parameters
In this version, we changed the default configuration of supported endpoints and query parameters. 
* A new config file will allow administrators to enable, disable, and optimize endpoints and query parameters as desired
* For performance reasons, endpoints and query parameters which are not supported by an index will be disabled by default
* If you do not wish to disable these endpoints, we have included an --enable-all-parameters flag - this would allow you to maintain the behavior from prior releases
* Further documentation can be found here: 
https://github.com/algorand/indexer/blob/develop/docs/DisablingParametersGuide.md

# Changelog
## New Features
* Make configurable parameter flags visible. ([#959](https://github.com/algorand/indexer/pull/959))
* Add --error-log-file validator option. ([#975](https://github.com/algorand/indexer/pull/975))
* Consider TxType when selecting transaction amount currency type. ([#935](https://github.com/algorand/indexer/pull/935))

## Enhancements
* Tests: Elaboration on system configuration for E2E tests ([#921](https://github.com/algorand/indexer/pull/921))
* Add documentation for configuring query parameters. ([#931](https://github.com/algorand/indexer/pull/931))
* New block fetcher unit tests. ([#967](https://github.com/algorand/indexer/pull/967))
* Update documentation to reflect automated e2e test artifacts. ([#956](https://github.com/algorand/indexer/pull/956))
* Add vacuum documentation. ([#957](https://github.com/algorand/indexer/pull/957))
* Cleanup README, add index management section, clarify transaction result order. ([#958](https://github.com/algorand/indexer/pull/958))
* Nightly job improvements ([#945](https://github.com/algorand/indexer/pull/945))
* Use external docker container to speed up tests. ([#948](https://github.com/algorand/indexer/pull/948))
* Add golangci-lint to CI. ([#947](https://github.com/algorand/indexer/pull/947))
* Tests: remove ghosts of past discrepancies in parity test ([#924](https://github.com/algorand/indexer/pull/924))
* Update parity job to focus on account. ([#979](https://github.com/algorand/indexer/pull/979))
* validator: skip comparison of deleted accounts. ([#987](https://github.com/algorand/indexer/pull/987))
* CICD: Adding PR Type label checker ([#985](https://github.com/algorand/indexer/pull/985))
* Add system requirements to README ([#981](https://github.com/algorand/indexer/pull/981))

## Bugfixes
* Fix hashes file extension ([#922](https://github.com/algorand/indexer/pull/922))
* Don't assume /v2/accounts `asset-id` parameter should override `exclude` parameter ([#977](https://github.com/algorand/indexer/pull/977))
* Skip validator errors resulting from the account resource limit. ([#974](https://github.com/algorand/indexer/pull/974))
* Fix race condition by calling Rollback before close when processing results. ([#965](https://github.com/algorand/indexer/pull/965))
* Do not show block not found error after fetcher has finished catchup. ([#966](https://github.com/algorand/indexer/pull/966))
* Ensure block-generator service shutdown after failure. ([#937](https://github.com/algorand/indexer/pull/937))
* Asset id check ([#990](https://github.com/algorand/indexer/pull/990))

## Other

* Update indirect go module. ([#932](https://github.com/algorand/indexer/pull/932))

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)
