
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.24.0-stable/daemon/algod/api/algod.oas3.yml). 
See the [upstream repository](https://github.com/algorand/go-algorand) for more information.

## Installation

```bash
npm install @awesome-algorand/algod-fetch --save
```

### Usage

```typescript
import {AlgodClient} from '@awesome-algorand/algod-fetch';

const client = new AlgodClient({
    BASE: 'https://testnet-api.algonode.cloud',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/algod/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

# Overview

This release provides important enhancements and bug fixes to improve ease of use and stability.

# Important Note

This release includes a migration, which may take a few minutes to complete. Due to the impact, we recommend applying this update progressively if running multiple nodes, to avoid large periods of concurrent inaccessibility.

# What&apos;s New
* Golang 1.21 support
* Experimental full assets for account endpoint API support
* Full logs for block support
* Fix for log rotation when cold dirs are used

# Changelog
## Enhancements
* API: Experimental full assets for account endpoint. ([#5948](https://github.com/algorand/go-algorand/pull/5948))
* API: blocks/{round}/logs endpoint ([#5865](https://github.com/algorand/go-algorand/pull/5865))
* Build: Go 1.21 Support ([#5994](https://github.com/algorand/go-algorand/pull/5994))
* Build: support SWAGGER_CONVERTER_API override ([#5968](https://github.com/algorand/go-algorand/pull/5968))
* Build: bump golang.org/x/crypto from 0.14.0 to 0.17.0 ([#5877](https://github.com/algorand/go-algorand/pull/5877))
* Crypto: convert BatchVerifier to interface ([#5988](https://github.com/algorand/go-algorand/pull/5988))
* Docker: Remove usage of `gosu` and replace with `su` ([#5951](https://github.com/algorand/go-algorand/pull/5951))
* Metrics: support labeled gauges ([#5956](https://github.com/algorand/go-algorand/pull/5956))
* Node: remove unused node GetTransaction and ListTxns methods ([#5983](https://github.com/algorand/go-algorand/pull/5983))
* Scripts: update buildnumber to use timezone-aware datetime ([#5971](https://github.com/algorand/go-algorand/pull/5971))
* Tests: Stabilize nightly tests. ([#5992](https://github.com/algorand/go-algorand/pull/5992))
* Tests: Fix flakey incentive e2e tests ([#5986](https://github.com/algorand/go-algorand/pull/5986))
* Tests: Allow go e2e tests to easily test multiple consensus versions ([#5981](https://github.com/algorand/go-algorand/pull/5981))
* Tests: Thread testing.T through so we panic less ([#5938](https://github.com/algorand/go-algorand/pull/5938))
* Tools: Revert &quot;feat: add support to display mnemonic discreetly for `algokey generate`&quot; ([#5974](https://github.com/algorand/go-algorand/pull/5974))
## Bugfixes
* Catchpoint: fix data files deletion in hot/cold dirs scenario ([#5963](https://github.com/algorand/go-algorand/pull/5963))
* Tests: Fix `AccountsUpdateSchemaTest` ignoring error bug ([#5985](https://github.com/algorand/go-algorand/pull/5985))
* Utils: Renaming files across devices ([#5977](https://github.com/algorand/go-algorand/pull/5977))
## Protocol Upgrade
This release does not contain a protocol upgrade.


---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

* Incentives: Suspend &quot;absentee&quot; accounts that don&apos;t propose. ([#5757](https://github.com/algorand/go-algorand/pull/5757))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

