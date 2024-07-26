
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.10.0-stable/daemon/kmd/api/swagger.json). 
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
<!-- A sentence or two capturing the release and any noteworthy details that anyone taking the release should be aware of -->

# What&apos;s New
* Fix for excess warning logging related to fetching stateproof secrets
* REST API changes:
  * Add GetBlockHash API to algod v2 
  * Return a 404 instead of a 500 when `/v2/blocks/{round}` fails due to a missing block
* Miscellaneous other small fixes
* Test improvements

# Changelog
## New Features
* AVM: Add Semicolon Parsing ([#4363](https://github.com/algorand/go-algorand/pull/4363))
* REST API: Add GetBlockHash API to algod v2 ([#4580](https://github.com/algorand/go-algorand/pull/4580))
## Enhancements
* Alphanet: merge build changes and consensus params ([#4431](https://github.com/algorand/go-algorand/pull/4431))
* Batchverifier: Rename and unexport local functions in verify/txn ([#4578](https://github.com/algorand/go-algorand/pull/4578))
* Build: Remove mac_amd64 from our default triggered builds. ([#4397](https://github.com/algorand/go-algorand/pull/4397))
* Build: adding valid_nightly_branch var to upload_binaries step ([#4459](https://github.com/algorand/go-algorand/pull/4459))
* Catchpoint: Optimize catchpoint ([#4254](https://github.com/algorand/go-algorand/pull/4254))
* Ci: Ensure algod_expect_test.go tests run by avoiding double partitioning ([#4421](https://github.com/algorand/go-algorand/pull/4421))
* Ci: Expose configuration to ignore parent E2E expect test runner invocations ([#4422](https://github.com/algorand/go-algorand/pull/4422))
* Ci: Four missing partiontest calls. And minor doc update. ([#4394](https://github.com/algorand/go-algorand/pull/4394))
* Ci: Increase parallelism without changing resource_class for faster builds ([#4448](https://github.com/algorand/go-algorand/pull/4448))
* Ci: Re-introduce build_nightly workflow to persist artifacts for upload_binaries ([#4457](https://github.com/algorand/go-algorand/pull/4457))
* Ci: Speed up CircleCI by folding build workflow downstream ([#4426](https://github.com/algorand/go-algorand/pull/4426))
* Ci: make windows build faster ([#4443](https://github.com/algorand/go-algorand/pull/4443))
* Ci: optimize caches used by CircleCI and GHA ([#4461](https://github.com/algorand/go-algorand/pull/4461))
* Ci: use GHA for codegen_verification ([#4412](https://github.com/algorand/go-algorand/pull/4412))
* Cicd: Macos11 support ([#4399](https://github.com/algorand/go-algorand/pull/4399))
* Cicd: Reordering circleci config ([#4564](https://github.com/algorand/go-algorand/pull/4564))
* Codec: new TxHandler byte decoder ([#4266](https://github.com/algorand/go-algorand/pull/4266))
* E2e Tests: tag e2e test data with commit hash ([#4481](https://github.com/algorand/go-algorand/pull/4481))
* Lint: Update linter version ([#4434](https://github.com/algorand/go-algorand/pull/4434))
* Lint: fix linter errors and update CI to require passing ([#4241](https://github.com/algorand/go-algorand/pull/4241))
* Lint: ioutil is deprecated, I have the power of search and replace ([#4440](https://github.com/algorand/go-algorand/pull/4440))
* Metrics: network tag filtering test ([#4526](https://github.com/algorand/go-algorand/pull/4526))
* Performance: Update two transaction verification benchmarks ([#4552](https://github.com/algorand/go-algorand/pull/4552))
* Performance: block validation benchmark ([#4522](https://github.com/algorand/go-algorand/pull/4522))
* Quality: Switch from golint to golangci-lint. ([#4418](https://github.com/algorand/go-algorand/pull/4418))
* REST API: Return a 404 when a block is not found. ([#4479](https://github.com/algorand/go-algorand/pull/4479))
* Stateproof: always set StateProofNextRound in metric ([#4475](https://github.com/algorand/go-algorand/pull/4475))
* Telemetry: add BlockAcceptedEventDetails.ReceivedAt to complement ValidatedAt ([#4583](https://github.com/algorand/go-algorand/pull/4583))
* Telemetry: add StartupEventDetails.Overrides ([#4563](https://github.com/algorand/go-algorand/pull/4563))
* Telemetry: Count and report the number of duplicate proposals and MsgDigestSkipTag messages received ([#4605](https://github.com/algorand/go-algorand/pull/4605))
* Tests: Bump py-algorand-sdk to v1.17.0 ([#4530](https://github.com/algorand/go-algorand/pull/4530))
* Tests: Get rid of references and uses of `go lint` and `go vet` ([#4444](https://github.com/algorand/go-algorand/pull/4444))
* Tests: add debug output to e2e_basic_start_stop ([#4396](https://github.com/algorand/go-algorand/pull/4396))
* Tests: add timestamps to some expect common operations ([#4437](https://github.com/algorand/go-algorand/pull/4437))
* Tests: benchmark assemble / transaction pool&apos;s uses of recomputeBlockEvaluator ([#3138](https://github.com/algorand/go-algorand/pull/3138))
* Tests: betanet-2 extended recipe ([#4572](https://github.com/algorand/go-algorand/pull/4572))
* Tests: fix TestAttestorsChange ([#4510](https://github.com/algorand/go-algorand/pull/4510))
* Tests: improve logging in expect tests ([#4405](https://github.com/algorand/go-algorand/pull/4405))
* Tests: ledger reload accessing txtail history ([#4473](https://github.com/algorand/go-algorand/pull/4473))
* Tests: script improvements for recent testing ([#4474](https://github.com/algorand/go-algorand/pull/4474))
* Tests: skip db concurrent Read/Write tests if test.short is set ([#4533](https://github.com/algorand/go-algorand/pull/4533))
* Tests: stop network before reading logs ([#4429](https://github.com/algorand/go-algorand/pull/4429))
* Tools: netgoal generate add `-X, --non-participating-nodes int` ([#4574](https://github.com/algorand/go-algorand/pull/4574))
* Tools: pingpong improvements ([#4294](https://github.com/algorand/go-algorand/pull/4294))
* Tools: tool to dump blocks to directory ([#4595](https://github.com/algorand/go-algorand/pull/4595))
* Typo Fix: &quot;Transcation&quot; to &quot;Transaction&quot; ([#4248](https://github.com/algorand/go-algorand/pull/4248))
## Bugfixes
* AVM: Handle Teal programs with manual constant blocks better ([#4442](https://github.com/algorand/go-algorand/pull/4442))
* Algod: changed state proof message to no longer be embedded ([#4395](https://github.com/algorand/go-algorand/pull/4395))
* Algod: fix nil deref while fetching stateproof secrets ([#4554](https://github.com/algorand/go-algorand/pull/4554))
* Bugfix: download more block to recover old state proofs ([#4392](https://github.com/algorand/go-algorand/pull/4392))
* Catchpoint: fix peer ranking ([#4535](https://github.com/algorand/go-algorand/pull/4535))
* Catchup: increase HTTPFetcher fetcherMaxBlockBytes for larger block size ([#4569](https://github.com/algorand/go-algorand/pull/4569))
* Cicd: Fixing golangci-lint and github action ([#4483](https://github.com/algorand/go-algorand/pull/4483))
* E2e Tests: remove unused e2e artifact ([#4487](https://github.com/algorand/go-algorand/pull/4487))
* Ledger: Initialize the accountUpdatesLedgerEvaluator properly ([#4456](https://github.com/algorand/go-algorand/pull/4456))
* Ledger: do not shadow db error in account lookup ([#4425](https://github.com/algorand/go-algorand/pull/4425))
* Ledger: extend catchpoint blocks lookback ([#4463](https://github.com/algorand/go-algorand/pull/4463))
* Ledger: fix TestCatchpointReadDatabaseOverflowSingleAccount ([#4579](https://github.com/algorand/go-algorand/pull/4579))
* Ledger: fix accounts cache ordering ([#4611](https://github.com/algorand/go-algorand/pull/4611))
* Ledger: fix catchpoint test ([#4480](https://github.com/algorand/go-algorand/pull/4480))
* Ledger: fix txtail restoring from catchpoints ([#4460](https://github.com/algorand/go-algorand/pull/4460))
* Ledger: fix typo in evalbench_test.go ([#4450](https://github.com/algorand/go-algorand/pull/4450))
* Loadgenerator: correctly handle AccountMnemonicList ([#4454](https://github.com/algorand/go-algorand/pull/4454))
* State Proofs: update state proof totals calculation ([#4445](https://github.com/algorand/go-algorand/pull/4445))
* Stateproofs: Make SP e2e tests easier for arm. ([#4402](https://github.com/algorand/go-algorand/pull/4402))
* Tech Debt: Remove unused/empty algod API spec ([#4420](https://github.com/algorand/go-algorand/pull/4420))
* Tests: Acquire locks when logging start and stop. ([#4408](https://github.com/algorand/go-algorand/pull/4408))
* Tests: Add logging to libgoal fixture on failure ([#4384](https://github.com/algorand/go-algorand/pull/4384))
* Tests: Convert goal app info expect test to e2e ([#4449](https://github.com/algorand/go-algorand/pull/4449))
* Tests: Fix restClientFixture test flaking ([#4484](https://github.com/algorand/go-algorand/pull/4484))
* Tests: Fix voterTracker tests ([#4441](https://github.com/algorand/go-algorand/pull/4441))
* Tests: TestSlowPeerDisconnect less flakey ([#4453](https://github.com/algorand/go-algorand/pull/4453))
* Tests: deprecate TestAsyncRecord ([#4407](https://github.com/algorand/go-algorand/pull/4407))
* Tests: deterministic rand seed for stable unit test ([#4447](https://github.com/algorand/go-algorand/pull/4447))
* Tests: fix TestBasicCatchpointCatchup ([#4390](https://github.com/algorand/go-algorand/pull/4390))
* Tests: fix logged panics in reproducible labels test ([#4446](https://github.com/algorand/go-algorand/pull/4446))
* Tests: fix method name after typo correction ([#4561](https://github.com/algorand/go-algorand/pull/4561))
* Tests: fix network metrics race condition in tests ([#4529](https://github.com/algorand/go-algorand/pull/4529))
* Tests: fix top online warning in TestAcctUpdatesCachesInitialization ([#4451](https://github.com/algorand/go-algorand/pull/4451))
* Tests: stabilize TestAssetCreateWaitRestartDelete ([#4400](https://github.com/algorand/go-algorand/pull/4400))
* Tests: wait until new block is committed to `BlockQueue` ([#4381](https://github.com/algorand/go-algorand/pull/4381))
* Tools: pingpong nil fix ([#4558](https://github.com/algorand/go-algorand/pull/4558))
* Updater: cleanup key.pub ([#4513](https://github.com/algorand/go-algorand/pull/4513))
## Protocol Upgrade
This release does not contain a protocol upgrade.

---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks.

## New Features
* AVM: Switch opcode ([#4458](https://github.com/algorand/go-algorand/pull/4458))
* AVM: frame pointers ([#4319](https://github.com/algorand/go-algorand/pull/4319))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

