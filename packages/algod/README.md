
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.6.2-stable/daemon/algod/api/algod.oas3.yml). 
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

Maintenance release of incremental enhancements and fixes.

# What's New
* Minor enhancements to logging
* Improved debugging support in tealdbg
* Golang 1.16 upgrade
* Upgrade arm32 builder to use arm32v7 (deprecates raspberry pi 1 support)

# Changelog
## New Features
* AVM: vFuture: inner appls can call v4 ([#3896](https://github.com/algorand/go-algorand/pull/3896))
* Goal: Source Mapping PC to TEAL ([#3726](https://github.com/algorand/go-algorand/pull/3726))

## Enhancements
* AVM: Deadcode and basic block analysis ([#3870](https://github.com/algorand/go-algorand/pull/3870))
* AVM: Perform json_ref expected type validation before expensive JSON processing ([#3866](https://github.com/algorand/go-algorand/pull/3866))
* AVM: Extract divideCeilUnsafely to help document opcode costing rationale ([#3867](https://github.com/algorand/go-algorand/pull/3867))
* AVM: Assembly simplification & flexible costs ([#3857](https://github.com/algorand/go-algorand/pull/3857))
* AVM: Rework around opcode fields for more flexible costs ([#3832](https://github.com/algorand/go-algorand/pull/3832))
* AVM: Improve error handling and execution time ([#3612](https://github.com/algorand/go-algorand/pull/3612))
* Agreement: add counters for dropped tasks and slow responses ([#3861](https://github.com/algorand/go-algorand/pull/3861))
* Agreement: report proposal and vote message buffer sizes at end of round ([#3932](https://github.com/algorand/go-algorand/pull/3932))
* Algod: Write to stdout when config.LogSizeLimit is 0 or -o is passed to algod. ([#3903](https://github.com/algorand/go-algorand/pull/3903))
* Algod: Add disassemble endpoint ([#3908](https://github.com/algorand/go-algorand/pull/3908))
* Algonet: use lower value of LastPartKeyRound for bootstrappedScenario ([#3865](https://github.com/algorand/go-algorand/pull/3865))
* Build: use 1.16.15 instead of 1.16.11 ([#3833](https://github.com/algorand/go-algorand/pull/3833))
* Build: add build essentials to dependency list ([#3782](https://github.com/algorand/go-algorand/pull/3782))
* Build: update build dependencies to use go 1.16 ([#3816](https://github.com/algorand/go-algorand/pull/3816))
* Build: compile with golang 1.16 ([#3803](https://github.com/algorand/go-algorand/pull/3803))
* Build: Update build image from arm32v6 to arm32v7 ([#3933](https://github.com/algorand/go-algorand/pull/3933))
* Ci: remove buildpulse upload step ([#3883](https://github.com/algorand/go-algorand/pull/3883))
* Ci: add test partitioning based on partition test verifier output ([#3859](https://github.com/algorand/go-algorand/pull/3859))
* Config: add some warning comments about changing RewardUnit value ([#3846](https://github.com/algorand/go-algorand/pull/3846))
* Devmode: create a block for external txns only ([#3784](https://github.com/algorand/go-algorand/pull/3784))
* Devops: Txnsync recipe updates ([#3906](https://github.com/algorand/go-algorand/pull/3906))
* Devops: Added recipe for transaction sync testing. ([#3884](https://github.com/algorand/go-algorand/pull/3884))
* Enhancement: Nightly e2e test upload ([#3849](https://github.com/algorand/go-algorand/pull/3849))
* Enhancement: Re-enable `fillBytes` method in ABI and eval.go implementation ([#3856](https://github.com/algorand/go-algorand/pull/3856))
* Goal: Add asset optin command ([#3881](https://github.com/algorand/go-algorand/pull/3881))
* Goal: Set default key dilution to be the same as algokey ([#3801](https://github.com/algorand/go-algorand/pull/3801))
* Goal: Warn on invalid method signature assembly ([#3614](https://github.com/algorand/go-algorand/pull/3614))
* Kmd: use updated karalabe lib ([#3819](https://github.com/algorand/go-algorand/pull/3819))
* Ledger: test OnlineAccountData ([#3831](https://github.com/algorand/go-algorand/pull/3831))
* Ledger: Refactor online totals ([#3770](https://github.com/algorand/go-algorand/pull/3770))
* Netdeploy: Add override to enable devmode for a network template. ([#3904](https://github.com/algorand/go-algorand/pull/3904))
* Netdeploy: Allow empty private network directory. ([#3911](https://github.com/algorand/go-algorand/pull/3911))
* Prefetcher: improve error codes ([#3815](https://github.com/algorand/go-algorand/pull/3815))
* REST API: Check for pending transactions in most recent rounds first. ([#3836](https://github.com/algorand/go-algorand/pull/3836))
* REST Client: always set Exclude value in accountInformationParams ([#3728](https://github.com/algorand/go-algorand/pull/3728))
* Tealdbg: Support for StepOver and refactoring object IDs ([#3653](https://github.com/algorand/go-algorand/pull/3653))
* Tealdbg: Replace LocalRunner.Run with LocalRunner.RunAll ([#3805](https://github.com/algorand/go-algorand/pull/3805))
* Telemetry: report heartbeat metrics as JSON numbers ([#3802](https://github.com/algorand/go-algorand/pull/3802))
* Tests: Disable bandwidth pprof svg generation by default ([#3779](https://github.com/algorand/go-algorand/pull/3779))
* Abi: Fix typo in abi_type.go ([#3940](https://github.com/algorand/go-algorand/pull/3940))
## Bugfixes
* AVM: Fix langspec (and some disassembly errors) for itxn_field ([#3869](https://github.com/algorand/go-algorand/pull/3869))
* AVM: Add acct_params_get to langspec.json ([#3862](https://github.com/algorand/go-algorand/pull/3862))
* AVM: getbyte and setbyte description to say index must be within length of array ([#3772](https://github.com/algorand/go-algorand/pull/3772))
* Algocfg: Fix algocfg get for non-string parameters. ([#3907](https://github.com/algorand/go-algorand/pull/3907))
* Algod: Fix issue with nil accounts in local-deltas array ([#3790](https://github.com/algorand/go-algorand/pull/3790))
* Algokey: clarify error messages. ([#3727](https://github.com/algorand/go-algorand/pull/3727))
* Bug-fix: ABI inferToSlice nil testcases ([#3826](https://github.com/algorand/go-algorand/pull/3826))
* Bug-fix: ABI encode infer to slice IsNil handler removal ([#3823](https://github.com/algorand/go-algorand/pull/3823))
* Diagcfg: Allow diagcfg to create logging.config in data directory. ([#3912](https://github.com/algorand/go-algorand/pull/3912))
* Goal: Rename source map output file ([#3905](https://github.com/algorand/go-algorand/pull/3905))
* Goal: Add check for signer passed in the case of logic sig rekeyed account ([#3773](https://github.com/algorand/go-algorand/pull/3773))
* Ledger: fix possible dbRound unsynchronization for trackers and registry ([#3910](https://github.com/algorand/go-algorand/pull/3910))
* Tests: fix TestAcctUpdateslookupLatestCacheRetry ([#3804](https://github.com/algorand/go-algorand/pull/3804))
* Tests: avoid generating large output on TestDeadlockLogging ([#3771](https://github.com/algorand/go-algorand/pull/3771))
* Utils: add arm32-specific NanoSleep implementation ([#3930](https://github.com/algorand/go-algorand/pull/3930))
* Ledger: fix lookupLatest usage of the resources cache ([#3939](https://github.com/algorand/go-algorand/pull/3939))

## Other
## Protocol Upgrade
This release does not contain a protocol upgrade.

---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)


