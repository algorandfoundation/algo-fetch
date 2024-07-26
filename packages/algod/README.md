
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.16.2-stable/daemon/algod/api/algod.oas3.yml). 
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

| **IMPORTANT**<br /> **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec:  https://github.com/algorandfoundation/specs/tree/abd3d4823c6f77349fc04c3af7b1e99fe4df699f |
|---|

# Overview

This update includes a drop in round time of ~0.4 seconds, a robustness improvement to State Proofs, and several developer-oriented features in the AVM, simulate, and devmode.

⚠️ In order to avoid opcode ambiguity, access to assets or applications with an ID less than 256 within a contract will fail immediately. For new networks, asset and application IDs will now start at 1000 to avoid any potential issues due to this change. ⚠️

# What&apos;s New

- 🚀 Round times are reduced by 400 milliseconds. See [here](https://developer.algorand.org/articles/reaching-new-transaction-speeds-on-algorand/) for details.
- 👥 Group resource sharing for app calls: access to resources (assets, apps, accounts, boxes) during smart contract evaluation is shared across the transaction group. See [here](https://developer.algorand.org/articles/introducing-avm-9-group-resource-sharing/) for details.
- 🕦 Devmode timestamp control: when running a network in devmode, the block timestamp can now be manipulated with a new API. See [here](https://developer.algorand.org/articles/developer-improvements-in-go-algorand-316/) for details.
- 🔮 More logging and opcode budget in simulate: when calling the simulate endpoint, there are now options to let the algod evaluate the transaction group with much higher limits on logging and on opcode budget. See [here](https://developer.algorand.org/articles/developer-improvements-in-go-algorand-316/) for details.
  - ⚠️ This release contains a breaking change to the simulate endpoint. See #5292 for more information and implementation details
- 📒 Transaction group updates API: a new algod API that returns the ledger updates caused by individual transaction groups. See [here](https://developer.algorand.org/articles/developer-improvements-in-go-algorand-316/) for details.
- ➕ Readiness Endpoint: algod has a new supplementary `/ready` endpoint to benefit any K8's deployment as a readiness probe. The endpoint will return a `200` response code once algod has caught up to the latest state.
- 📦 Algod Docker Container: algod container usage just got easier! The container now supports node profiles to simplify running common configurations in place of mounting a custom `config.json` file. There are also changes to make mounting a data directory more consistent. See [DockerHub](https://hub.docker.com/r/algorand/algod) for more details.

# Changelog
## Protocol Upgrade
This release contains a double protocol upgrade (Consensus v37 and v38). No action is needed from node runners but is called out for transparency. Consensus v37 is a technical upgrade released in unison with Consensus v38. v37 is needed to allow nodes to build up a necessary state to support State Proof related options in consensus v38.

## New Features
* AVM: Share resource arrays across transactions ([#5035](https://github.com/algorand/go-algorand/pull/5035))
* Algod: Allow timestamp offsets in dev mode ([#5296](https://github.com/algorand/go-algorand/pull/5296))
* Algod: Simulation run with extra budget per transaction group ([#5354](https://github.com/algorand/go-algorand/pull/5354))
* Algod: Simulation run with increased limits on logs ([#5247](https://github.com/algorand/go-algorand/pull/5247))
* API: Txn Group Delta Apis ([#5350](https://github.com/algorand/go-algorand/pull/5350))
* Evaltracer: Txn group deltas Tracer ([#5297](https://github.com/algorand/go-algorand/pull/5297))
* Algod: New health endpoint (k8s `/ready` endpoint) ([#4844](https://github.com/algorand/go-algorand/pull/4844))
* Docker: add profile support and improved endpoint access. ([#5323](https://github.com/algorand/go-algorand/pull/5323))
* Algod: support state proofs recoverability ([#4803](https://github.com/algorand/go-algorand/pull/4803))

## Enhancements
* API: Don&apos;t return a top level array from algod ([#5404](https://github.com/algorand/go-algorand/pull/5404))
* API: Limit request body size to 10MB ([#5246](https://github.com/algorand/go-algorand/pull/5246))
* AVM: Modify StackType to provide additional information ([#5130](https://github.com/algorand/go-algorand/pull/5130))
* AVM: No low resources ([#5328](https://github.com/algorand/go-algorand/pull/5328))
* AVM: Show opcode context for logicsigs (not just apps) ([#5336](https://github.com/algorand/go-algorand/pull/5336))
* AVM: Simplify conversion and fix a spurious complaint from static analysis ([#5421](https://github.com/algorand/go-algorand/pull/5421))
* Algocfg(profile): Add file name to config file conflict message. ([#5262](https://github.com/algorand/go-algorand/pull/5262))
* Algocfg(profile): improve invalid profile error message. ([#5324](https://github.com/algorand/go-algorand/pull/5324))
* Algod: Add EvalTracer tests for StateDeltas ([#5368](https://github.com/algorand/go-algorand/pull/5368))
* Algod: Better Box Reference Error Message ([#5325](https://github.com/algorand/go-algorand/pull/5325))
* Algod: Minor refactoring REST client `submitForm` from go-sdk PR #335 ([#5253](https://github.com/algorand/go-algorand/pull/5253))
* Algod: Modify simulate endpoint request type ([#5292](https://github.com/algorand/go-algorand/pull/5292))
* Algod: Move delta API tags ([#5396](https://github.com/algorand/go-algorand/pull/5396))
* Algod: Remove unused 404 resp in simulate endpoint ([#5211](https://github.com/algorand/go-algorand/pull/5211))
* Algod: Use future consensus version to test with no low resources ([#5362](https://github.com/algorand/go-algorand/pull/5362))
* Algod: search phonebook in data directory in addition to bindir ([#5235](https://github.com/algorand/go-algorand/pull/5235))
* Catchpoints: Small tweaks, mostly to comments ([#5195](https://github.com/algorand/go-algorand/pull/5195))
* Chore: Focus CONTRIBUTING.md on code contributions. ([#5294](https://github.com/algorand/go-algorand/pull/5294))
* Ci: set reviewdog golangci-lint go version ([#5196](https://github.com/algorand/go-algorand/pull/5196))
* Community: Create CODE_OF_CONDUCT.md ([#5408](https://github.com/algorand/go-algorand/pull/5408))
* Consensus: Introduce versions v37 and v38 ([#5397](https://github.com/algorand/go-algorand/pull/5397))
* Dev Tools: Integrate Logfile Navigator (lnav) ([#5000](https://github.com/algorand/go-algorand/pull/5000))
* Devops: Add CODEOWNERS to restrict workflow edits ([#5353](https://github.com/algorand/go-algorand/pull/5353))
* Devops: Update CODEOWNERS to only refer to the devops group ([#5389](https://github.com/algorand/go-algorand/pull/5389))
* Docker: Updated user and data dir handling. ([#5276](https://github.com/algorand/go-algorand/pull/5276))
* Docker: disable rewards in devmode template ([#5270](https://github.com/algorand/go-algorand/pull/5270))
* Docker: option to override topology file and peer address. ([#5209](https://github.com/algorand/go-algorand/pull/5209))
* Docs: Fix bug label ([#5322](https://github.com/algorand/go-algorand/pull/5322))
* Docs: add titles of subsystems, minor md fixes ([#5279](https://github.com/algorand/go-algorand/pull/5279))
* Docs: increase heading levels, thus only one h1 is used ([#5291](https://github.com/algorand/go-algorand/pull/5291))
* Enhancement: 1. `go mod tidy` + 2. `diffutils` when mac OS ([#5398](https://github.com/algorand/go-algorand/pull/5398))
* Enhancement: Only look back to FirstValid for pending transactions that were found in the pool ([#5295](https://github.com/algorand/go-algorand/pull/5295))
* Eval: Add block hooks to eval tracer ([#5303](https://github.com/algorand/go-algorand/pull/5303))
* Fix: Tech Debt (wsNetwork &quot;auto&quot; and OnlineAccountsDelete comment) ([#5207](https://github.com/algorand/go-algorand/pull/5207))
* Follow Mode: set sync round after fast catchup. ([#5349](https://github.com/algorand/go-algorand/pull/5349))
* Follower: add round information for missing deltas request ([#5277](https://github.com/algorand/go-algorand/pull/5277))
* Goal: Introduce new command for simulate ([#5213](https://github.com/algorand/go-algorand/pull/5213))
* Goal: Make goal state schema optional ([#5356](https://github.com/algorand/go-algorand/pull/5356))
* Goal: rename `--allow-extra-opcode-budget` to `--allow-more-opcode-budget` ([#5407](https://github.com/algorand/go-algorand/pull/5407))
* Goal: user defined scheme to connect to remote host ([#4922](https://github.com/algorand/go-algorand/pull/4922))
* Ledger: Check MaxAcctLookback in tracker. ([#5300](https://github.com/algorand/go-algorand/pull/5300))
* Ledger: Exclude stake at R-320 that is expired by R ([#5403](https://github.com/algorand/go-algorand/pull/5403))
* Ledger: convert FC unmarshalled nil value to empty byte slice on DB write KVs ([#5225](https://github.com/algorand/go-algorand/pull/5225))
* Ledger: rename &quot;internal&quot; to &quot;eval&quot; ([#5236](https://github.com/algorand/go-algorand/pull/5236))
* Lint: enable nilerr linter and fix errors ([#5361](https://github.com/algorand/go-algorand/pull/5361))
* Netdeploy: Copy ledger directory for kv tracker database ([#5392](https://github.com/algorand/go-algorand/pull/5392))
* Network: enforce maximum header size on outgoing ws conns ([#5268](https://github.com/algorand/go-algorand/pull/5268))
* REST: add the round number to algod box endpoint response ([#5340](https://github.com/algorand/go-algorand/pull/5340))
* Scripts: enhance upload_config.sh ([#5260](https://github.com/algorand/go-algorand/pull/5260))
* Simulate: Add opcode costs and budgets into response ([#5221](https://github.com/algorand/go-algorand/pull/5221))
* Simulate: Make optional signatures an opt-in feature ([#5335](https://github.com/algorand/go-algorand/pull/5335))
* Teal: Add columns to assembly error messages. ([#5402](https://github.com/algorand/go-algorand/pull/5402))
* Tools: Cross Repo Types Comparison Tool ([#5304](https://github.com/algorand/go-algorand/pull/5304))
* Tools: Don&apos;t use strings.Title in chopper ([#5239](https://github.com/algorand/go-algorand/pull/5239))
* Tools: Run the Cross Repo Type Checker in C.I. ([#5326](https://github.com/algorand/go-algorand/pull/5326))
* Tools: add block-generator into published build ([#5351](https://github.com/algorand/go-algorand/pull/5351))
* Tools: allow dumpblocks work with wal-enabled dbs ([#5380](https://github.com/algorand/go-algorand/pull/5380))
* Tools: block generator ([#5245](https://github.com/algorand/go-algorand/pull/5245))
* Tools: block generator data reporting ([#5339](https://github.com/algorand/go-algorand/pull/5339))
* Tools: enable consecutive test runs in the block generator ([#5409](https://github.com/algorand/go-algorand/pull/5409))
* Tools: new endpoints for block generator ([#5257](https://github.com/algorand/go-algorand/pull/5257))
* Tools: run block generator using a preloaded db ([#5384](https://github.com/algorand/go-algorand/pull/5384))
* Tools: search/replace indexer/conduit in block-generator ([#5321](https://github.com/algorand/go-algorand/pull/5321))
* Tools: update block-generator to use conduit binary ([#5306](https://github.com/algorand/go-algorand/pull/5306))
## Bugfixes
* API: Fix errFailedRetrievingStateDelta response. ([#5452](https://github.com/algorand/go-algorand/pull/5452))
* API: Fix vote status computation. ([#5228](https://github.com/algorand/go-algorand/pull/5228))
* AVM: Avoid panics in disassembly when branch instructions are short ([#5252](https://github.com/algorand/go-algorand/pull/5252))
* AVM: Avoid panics while type checking bad immediates ([#5271](https://github.com/algorand/go-algorand/pull/5271))
* AVM: Make apps and app accounts available while creation is &quot;pending&quot; ([#5425](https://github.com/algorand/go-algorand/pull/5425))
* AVM: Proper cross product check for app put and del ([#5467](https://github.com/algorand/go-algorand/pull/5467))
* Algod: adjust numeric version encoding ([#5457](https://github.com/algorand/go-algorand/pull/5457))
* Algod: Capitalize API fields for state deltas ([#5414](https://github.com/algorand/go-algorand/pull/5414))
* Assembler: Error if extra args are present in pragmas ([#5400](https://github.com/algorand/go-algorand/pull/5400))
* Bug Fix: block generator test ([#5410](https://github.com/algorand/go-algorand/pull/5410))
* Bugfix: reduce flakiness in follower node test ([#5355](https://github.com/algorand/go-algorand/pull/5355))
* Chore: Rename ModStateProofNextRound to StateProofNext. ([#5265](https://github.com/algorand/go-algorand/pull/5265))
* Cicd: fix ci-build target for buildsrc-special support ([#5433](https://github.com/algorand/go-algorand/pull/5433))
* Dependency: Update codec version to 1.1.9 ([#5395](https://github.com/algorand/go-algorand/pull/5395))
* Devops: fix codecov uploading ([#5345](https://github.com/algorand/go-algorand/pull/5345))
* Docker: Fix ADMIN_TOKEN and add missing variables to echo statements. ([#5357](https://github.com/algorand/go-algorand/pull/5357))
* Erl: Support zero-size reservations ([#5192](https://github.com/algorand/go-algorand/pull/5192))
* Fix: Correct GeneratedAccountsMnemonics Check ([#5274](https://github.com/algorand/go-algorand/pull/5274))
* Follower: Set initial sync round to latest tracker committed round. ([#5251](https://github.com/algorand/go-algorand/pull/5251))
* Goal: Better formatting in `goal clerk simulate` ([#5259](https://github.com/algorand/go-algorand/pull/5259))
* Ledger: fix commit tasks enqueueing ([#5214](https://github.com/algorand/go-algorand/pull/5214))
* Ledger: fix error shadowing in accountsNewRound ([#5266](https://github.com/algorand/go-algorand/pull/5266))
* Ledger: report catchpoint writing only when it actually started ([#5413](https://github.com/algorand/go-algorand/pull/5413))
* Lint: Fix lint errors in `config/` ([#5416](https://github.com/algorand/go-algorand/pull/5416))
* Logging: fix logging to line. ([#5359](https://github.com/algorand/go-algorand/pull/5359))
* Tests: Change `dd` argument to use a bytes value ([#5263](https://github.com/algorand/go-algorand/pull/5263))
* Tests: Change truncate to dd for mac amd tests ([#5256](https://github.com/algorand/go-algorand/pull/5256))
* Tests: Fix State-Proofs ledger tests ([#5379](https://github.com/algorand/go-algorand/pull/5379))
* Tests: Fix devmode test ([#5334](https://github.com/algorand/go-algorand/pull/5334))
* Tests: Fix error messages in ledger tests ([#5363](https://github.com/algorand/go-algorand/pull/5363))
* Tests: Improve flaky test from non-deterministic order string ([#5333](https://github.com/algorand/go-algorand/pull/5333))
* Tests: fix consensus version inconsistency in newTestLedger ([#5342](https://github.com/algorand/go-algorand/pull/5342))
* Tests: remove follower node flaky TestSyncRoundWithRemake ([#5415](https://github.com/algorand/go-algorand/pull/5415))
* Txhandler: make dedup working set independent from ERL ([#5200](https://github.com/algorand/go-algorand/pull/5200))
* Txngroup-deltas: Fix pointer bug copying deltas for txngroups ([#5375](https://github.com/algorand/go-algorand/pull/5375))
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

