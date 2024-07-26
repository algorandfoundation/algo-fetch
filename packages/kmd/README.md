
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.13.1-stable/daemon/kmd/api/swagger.json). 
See the [upstream repository](https://github.com/algorand/go-algorand) for more information.

## Installation

```bash
npm install @awesome-algorand/kmd-fetch --save
```

### Usage

```typescript
import {KmdClient} from '@awesome-algorand/kmd-fetch';

const client = new KmdClient({
    BASE: 'https://localhost:4001',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/kmd/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

# Overview

Deprecated v1 REST API endpoints are now removed (all v1 endpoints). Documentation on our v2 REST API endpoints can be found [here](https://developer.algorand.org/docs/rest-apis/algod/v2/). The release also contains performance enhancements to logic signature processing, improved telemetry, a new automated goal subcommand to delete partkeys, and other minor performance and usability improvements.

# What&apos;s New

* v1 REST API endpoints are now removed. 
  * Drop support for algod v1 REST API.  v1 endpoints now return a 410 code to make explicit the API reached end-of-life.  The replacement is https://developer.algorand.org/docs/rest-apis/algod/v2/ . 
  * Breaking changes to algod v2 REST API - These previously deprecated response fields are removed:
    * https://developer.algorand.org/docs/rest-apis/algod/v2/#post-v2tealdryrun - `cost` (https://github.com/algorand/go-algorand/pull/4875/files#diff-4dbbc679cc9edab4510c8be1d215ec85830b5a5cfba57ac1379501cbeb3911d0L3227).
    * https://developer.algorand.org/docs/rest-apis/algod/v2/#post-v2tealcompile - `sourcemap.mapping` (https://github.com/algorand/go-algorand/pull/4875/files#diff-70eb30d34776b4cd7c752fef5b8aad5363a3648e46466331e7d2e6173744bc99L40).
 * New goal subcommand for automated deletion of partkeys ([#4788](https://github.com/algorand/go-algorand/pull/4788))
 * Addition of version to langspec.json ([#4883](https://github.com/algorand/go-algorand/pull/4883))
 * Continued performance and telemetry improvements:
    * Early duplicates detection in txHandler ([#4806](https://github.com/algorand/go-algorand/pull/4806))
    * Teal: optimize CheckSignature ([#4893](https://github.com/algorand/go-algorand/pull/4893))
    * Metrics added for txpool.Remember in txHandler ([#4839](https://github.com/algorand/go-algorand/pull/4839))
    * Metrics added for errors returned by checkAlreadyCommitted ([#4881](https://github.com/algorand/go-algorand/pull/4881))
    * Promote trie-related log warnings to errors ([#4882](https://github.com/algorand/go-algorand/pull/4882))

# Changelog

## Protocol Upgrade
This release does not contain a protocol upgrade.

## New Features
* Goal: account deletepartkey subcomand ([#4788](https://github.com/algorand/go-algorand/pull/4788))
* Ledger Deltas: AccountDelta retrieval through ledger/catchup service ([#4658](https://github.com/algorand/go-algorand/pull/4658))

## Enhancements
* Algod: Delete deprecated cost field in dyrun response and mapping field in sourcemap ([#4875](https://github.com/algorand/go-algorand/pull/4875))
* Algod: Sunset v1 handlers ([#4847](https://github.com/algorand/go-algorand/pull/4847))
* Performance: Implement sync.Pool for cow.child() ([#4766](https://github.com/algorand/go-algorand/pull/4766))
* Teal: optimize CheckSignature ([#4893](https://github.com/algorand/go-algorand/pull/4893))
* Txhandler: metrics for txpool.Remember ([#4839](https://github.com/algorand/go-algorand/pull/4839))
* Txhandler: early duplicates detection ([#4806](https://github.com/algorand/go-algorand/pull/4806))
* Txhandler: upgraded benchmarks ([#4834](https://github.com/algorand/go-algorand/pull/4834))
* Catchpoint: Promote trie-related log warnings to error ([#4882](https://github.com/algorand/go-algorand/pull/4882))
* Updater: use more-recent installer package ([#4734](https://github.com/algorand/go-algorand/pull/4734))
* Docker: General purpose docker container. ([#4816](https://github.com/algorand/go-algorand/pull/4816))
* Metrics: split alive check counter between early/dead ([#4898](https://github.com/algorand/go-algorand/pull/4898))
* Metrics: update some new metric names ([#4899](https://github.com/algorand/go-algorand/pull/4899))
* Metrics: add counters for checkAlreadyCommitted, split &quot;InLedger&quot; counters by reason ([#4881](https://github.com/algorand/go-algorand/pull/4881))
* Ledger: add context to block mismatch error in VerifyCatchpoint ([#4821](https://github.com/algorand/go-algorand/pull/4821))
* Goal: Test ABI reference arguments during creation ([#4872](https://github.com/algorand/go-algorand/pull/4872))
* Node: Fix disabled node tests ([#4824](https://github.com/algorand/go-algorand/pull/4824))
* Testing: defi txn group benchmark ([#4886](https://github.com/algorand/go-algorand/pull/4886))
* Tests: Extend TestCatchpointAfterTxns to catch catchpoint write corruption ([#4818](https://github.com/algorand/go-algorand/pull/4818))
* Langspec: adding version to langspec ([#4883](https://github.com/algorand/go-algorand/pull/4883))
* Docs: update API docs, remove unused codegen configs ([#4896](https://github.com/algorand/go-algorand/pull/4896))

## Bugfixes
* Bug-fix: upgrade AVM-abi ([#4838](https://github.com/algorand/go-algorand/pull/4838))
* Catchpoint: Fix broken merge between #4818 and #4835 ([#4840](https://github.com/algorand/go-algorand/pull/4840))
* Ci: Fix some details around the hashKind -> HashKind change ([#4865](https://github.com/algorand/go-algorand/pull/4865))
* Prefetcher: preallocate aligned groupTasks in groupsReady ([#4876](https://github.com/algorand/go-algorand/pull/4876))
* Bug fix: 64-bit alignment of groupTasks ([#4876](https://github.com/algorand/go-algorand/pull/4876))

## Not Yet Enabled
* Rest API: make the data endpoints public ([#4900](https://github.com/algorand/go-algorand/pull/4900))


## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)
