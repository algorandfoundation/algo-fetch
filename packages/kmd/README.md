
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.17.0-stable/daemon/kmd/api/swagger.json). 
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

Go-algorand 3.17.0 is a maintenance release that fixes some minor issues, cleans up stale code, upgrades the Algod client to Go version `1.20`, and introduces enhancements such as backup DNS bootstrap support and initial PC trace support.

# What's New

* 🌐  Network Resiliency: Algod now supports multiple DNS providers for bootstrapping onto the network increasing network resiliency against DNS failures.
* 💻  Go-lang upgrades: go-algorand now requires Go version `1.20`, a change that improves the security and performance of internal Algod functionality.
* 🤝  Agreement: We have externalized our go-algorand's implementation of its cryptographic sortition to better manage its dependencies and make it usable as a separate library (see [here](https://github.com/algorand/sortition) for implementation details).
* 📦  Container: Multi-algod container setup is now supported. This is great for those who want to set up a private network with networking enabled as well as adding peers to a non-standard relay node.
* 👁️  Improved error handling: Algod will now return an error if it is unable to begin fast catchup providing a better user experience when trying to start a node.
* 🐛 Smart Contract Debugging: simulate PC-based execution trace has been introduced including both stack and scratch slot changes. This is one of the final building blocks towards the full debugger experience.

# Changelog
## New Features
* Algod: Leverage 2 SRV record providers for resolving relay addresses w/ de-duplication. ([#5087](https://github.com/algorand/go-algorand/pull/5087))
* Algod: Simulate endpoint scratch-change exposure ([#5563](https://github.com/algorand/go-algorand/pull/5563))
* Algod: Simulate endpoint stack-change exposure ([#5440](https://github.com/algorand/go-algorand/pull/5440))
* Algod: Simulation PC exposure for App approval/clear-state transaction ([#5360](https://github.com/algorand/go-algorand/pull/5360))
## Enhancements
* API: Allow DELETE calls ([#5515](https://github.com/algorand/go-algorand/pull/5515))
* AVM: Increase coverage by deleting a dead function and adding limit tests ([#5422](https://github.com/algorand/go-algorand/pull/5422))
* AVM: Some error cleanup, and added coverage ([#5441](https://github.com/algorand/go-algorand/pull/5441))
* Algocfg: Add EnableTxnEvalTracer to algocfg development profile. ([#5481](https://github.com/algorand/go-algorand/pull/5481))
* Algocfg: Remove block validation override from participation profile. ([#5502](https://github.com/algorand/go-algorand/pull/5502))
* Algod: Add README file to state proof package ([#5386](https://github.com/algorand/go-algorand/pull/5386))
* Block-generator: conduit performance benchmark scenarios. ([#5532](https://github.com/algorand/go-algorand/pull/5532))
* Blockserver: Memory counter for http block requests ([#5428](https://github.com/algorand/go-algorand/pull/5428))
* Build: Disable goexperiments in our builds due to issue present in Go 1.20.5 ([#5484](https://github.com/algorand/go-algorand/pull/5484))
* Build: Golang 1.20 upgrade. ([#5462](https://github.com/algorand/go-algorand/pull/5462))
* Build: Split nightly job into its own workflow. Remove ARM64 platform builds from our triggered/on commit builds. ([#5485](https://github.com/algorand/go-algorand/pull/5485))
* Build: remove boost dependency and internal sortition package ([#5459](https://github.com/algorand/go-algorand/pull/5459))
* Build: remove sqlite from release configurations ([#5562](https://github.com/algorand/go-algorand/pull/5562))
* Build: update falcon to v0.1.0 for new CFLAGS ([#5460](https://github.com/algorand/go-algorand/pull/5460))
* Catchpoint: use read connection for data retrieval for spver hash calculation ([#5592](https://github.com/algorand/go-algorand/pull/5592))
* Catchup: Add HEAD request to catchpoint service start ([#5393](https://github.com/algorand/go-algorand/pull/5393))
* Catchup: Catchup variable reuse ([#5551](https://github.com/algorand/go-algorand/pull/5551))
* Chore: Small cleanups for clarity ([#5526](https://github.com/algorand/go-algorand/pull/5526))
* Chore: Use exp/slices and exp/maps to simplify some code ([#5479](https://github.com/algorand/go-algorand/pull/5479))
* Chore: Use strings.Cut for clarity ([#5474](https://github.com/algorand/go-algorand/pull/5474))
* Chore: remove a redundant argument to maintain single source of truth ([#5530](https://github.com/algorand/go-algorand/pull/5530))
* Chore: use string builder instead of string concatenation in catchup service ([#5572](https://github.com/algorand/go-algorand/pull/5572))
* Ci: Don&apos;t run tests during benchmark ([#5491](https://github.com/algorand/go-algorand/pull/5491))
* Cicd: Update docker containers to newer versions ([#5529](https://github.com/algorand/go-algorand/pull/5529))
* Cicd: Update ubuntu circleci image and orbs ([#5564](https://github.com/algorand/go-algorand/pull/5564))
* Circleci: Update macos xcode versions ([#5590](https://github.com/algorand/go-algorand/pull/5590))
* Cleanup: Remove indexer v1 from codebase ([#5477](https://github.com/algorand/go-algorand/pull/5477))
* Cli: clarify program source flag description ([#5571](https://github.com/algorand/go-algorand/pull/5571))
* Config: make Tx dedupe cache maxSize configurable ([#5419](https://github.com/algorand/go-algorand/pull/5419))
* Config: update MaxCatchpointDownloadDuration to 12h ([#5503](https://github.com/algorand/go-algorand/pull/5503))
* Docker: Additional private network options and container tweaks. ([#5525](https://github.com/algorand/go-algorand/pull/5525))
* Encoding: Update go-codec version. ([#5471](https://github.com/algorand/go-algorand/pull/5471))
* Genesis: add GenesisAccountData type for use in GenesisAllocation ([#5463](https://github.com/algorand/go-algorand/pull/5463))
* Goal: support simulate scratch in exec trace ([#5589](https://github.com/algorand/go-algorand/pull/5589))
* Lint: enable govet shadow linter and resolve linter warnings ([#5261](https://github.com/algorand/go-algorand/pull/5261))
* Lint: enable staticcheck for test code and fix issues ([#5401](https://github.com/algorand/go-algorand/pull/5401))
* Metrics: Add LedgerDBRound gauge ([#5456](https://github.com/algorand/go-algorand/pull/5456))
* Network: Limit message length based on Tag ([#5388](https://github.com/algorand/go-algorand/pull/5388))
* Network: discard unrequested or stale block messages ([#5431](https://github.com/algorand/go-algorand/pull/5431))
* Network: improve MsgOfInterest message handling ([#5476](https://github.com/algorand/go-algorand/pull/5476))
* Network: peer selector expansion and PeersPhonebookArchivalNodes ([#5385](https://github.com/algorand/go-algorand/pull/5385))
* Network: ws block byte limiter ([#5472](https://github.com/algorand/go-algorand/pull/5472))
* Perf Tests: use metrics for memory usage charts ([#5565](https://github.com/algorand/go-algorand/pull/5565))
* Runtime: Add delete-if-exists check for the no longer used indexer.sqlite file… ([#5531](https://github.com/algorand/go-algorand/pull/5531))
* Sortition: use external sortition package ([#5429](https://github.com/algorand/go-algorand/pull/5429))
* Tests: Fix catchpoint catchup tests to use relay for catchup ([#5507](https://github.com/algorand/go-algorand/pull/5507))
* Tests: Get rapid into the codebase ([#5437](https://github.com/algorand/go-algorand/pull/5437))
* Tests: Replace timer with counter loop in TestNodeTxHandlerRestart ([#5533](https://github.com/algorand/go-algorand/pull/5533))
* Tools: Block Generator Apps. Part 2: boxes ([#5478](https://github.com/algorand/go-algorand/pull/5478))
* Tools: Block-generator Applications. Part 1: create ([#5450](https://github.com/algorand/go-algorand/pull/5450))
* Tools: EvalDelta and ConsensusParams x-repo type checks ([#5381](https://github.com/algorand/go-algorand/pull/5381))
* Tools: Reorganize block generator scripts. ([#5582](https://github.com/algorand/go-algorand/pull/5582))
* Tools: let catchpointdump to calculate and print data hashes ([#5584](https://github.com/algorand/go-algorand/pull/5584))
* Tools: prepare block-generator for configuring apps ([#5443](https://github.com/algorand/go-algorand/pull/5443))
* Tools: replace upload_metrics ([#5470](https://github.com/algorand/go-algorand/pull/5470))
* Tools: txn replayer ([#5420](https://github.com/algorand/go-algorand/pull/5420))
## Bugfixes
* Bugfix: ensure blockservice callbacks are not nil ([#5518](https://github.com/algorand/go-algorand/pull/5518))
* Ci: don&apos;t use deprecated set-output in github actions ([#5453](https://github.com/algorand/go-algorand/pull/5453))
* Docker: Start kmd in the background. ([#5514](https://github.com/algorand/go-algorand/pull/5514))
* Docker: fix slow docker container start up ([#5513](https://github.com/algorand/go-algorand/pull/5513))
* Docs: Fix broken markdown in follower documentation. ([#5585](https://github.com/algorand/go-algorand/pull/5585))
* Fix: goal clerk rawsend print pending round rather than ptr to round ([#5499](https://github.com/algorand/go-algorand/pull/5499))
* Flake: TestLedgerContinuesOnVotersCallbackFailure ([#5454](https://github.com/algorand/go-algorand/pull/5454))
* Follower: Use Buffered syncNow channel to correctly trigger sync in private networks ([#5516](https://github.com/algorand/go-algorand/pull/5516))
* Goal: account info with deleted asset suppress error and better output ([#5504](https://github.com/algorand/go-algorand/pull/5504))
* Ledger: fix catchpoint pending hashes locking ([#5534](https://github.com/algorand/go-algorand/pull/5534))
* Ledger: move MakeCatchpointReader back to the Reader interface ([#5583](https://github.com/algorand/go-algorand/pull/5583))
* Ledger: use single SP verification hash/data query for catchpoint tracking & generation ([#5579](https://github.com/algorand/go-algorand/pull/5579))
* Netgoal: fix large db generation ([#5445](https://github.com/algorand/go-algorand/pull/5445))
* Tests: fix rawsend.sh nightly test failure ([#5519](https://github.com/algorand/go-algorand/pull/5519))
* Tests: reenable TestVotersReloadFromDiskPassRecoveryPeriod ([#5496](https://github.com/algorand/go-algorand/pull/5496))
* Tools: block generator inner transactions ([#5506](https://github.com/algorand/go-algorand/pull/5506))
* Tools: bugfix block-generator to handle conduit&apos;s Init block requests ([#5449](https://github.com/algorand/go-algorand/pull/5449))
* Tracer: Default to ledger tracer when starting new evaluator ([#5521](https://github.com/algorand/go-algorand/pull/5521))
## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)


