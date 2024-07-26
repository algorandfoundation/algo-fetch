
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.9.2-stable/daemon/kmd/api/swagger.json). 
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

| **IMPORTANT**<br />  **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec: https://github.com/algorandfoundation/specs/tree/433d8e9a7274b6fca703d91213e05c7e6a589e69
|---|

# What's New

* **State Proofs:** lightweight, cryptographically provable, portable proofs of Algorand state that let dapps on other blockchains trustlessly verify Algorand transactions, making it safer and easier to develop and use cross-chain products and services.
* **Max TPS of 6k**
  * Larger blocks: ~5x increase in max-block size (from 1MB to 5MiB), allowing up to ~25k transactions per block.
  * Shorter round times: ~0.5s reduction in average round times (approaching ~3.9s).
* **AVM v7**
  - On-chain randomness beacons and oracles can now be built by taking advantage the new `block` and `vrf_verify` opcodes.
  - Unfunded accounts (with 0 microalgo) can now issue transactions as long as their fees are covered by fee pooling in the transaction group.
  - App calls are now implicitly given access to the app accounts for the apps specified in the foreign apps array.

# Changelog
## New Features
* Algod: State Proofs ([#4226](https://github.com/algorand/go-algorand/pull/4226))
* AVM: randomness support ([#3900](https://github.com/algorand/go-algorand/pull/3900))
* AVM: Refactor Pseudo-ops ([#4170](https://github.com/algorand/go-algorand/pull/4170))
* AVM: Provide access to large programs in a txn, for read and inner submit ([#4148](https://github.com/algorand/go-algorand/pull/4148))
* Goal Network Catchup: automatically fetch catchpoint if not provided ([#4012](https://github.com/algorand/go-algorand/pull/4012))
## Enhancements
* 320 Rounds: Add logging for new logic ([#4332](https://github.com/algorand/go-algorand/pull/4332))
* AVM: Spec updates for v7 ([#4347](https://github.com/algorand/go-algorand/pull/4347))
* AVM: Fix crypto benchmarks from bitrot ([#4340](https://github.com/algorand/go-algorand/pull/4340))
* AVM: Move elliptic curve math up to v8 so it doesn&apos;t get released ([#4282](https://github.com/algorand/go-algorand/pull/4282))
* AVM: Consolidate TEAL and AVM versioning ([#4269](https://github.com/algorand/go-algorand/pull/4269))
* AVM: Don&apos;t parallelize tests that use shared for loop var ([#4253](https://github.com/algorand/go-algorand/pull/4253))
* Algod: rename some API operations for clarity ([#4376](https://github.com/algorand/go-algorand/pull/4376))
* Ci: Run go vet on the entire repo ([#4312](https://github.com/algorand/go-algorand/pull/4312))
* Ci: Add parameter to run Nightly Test ([#4299](https://github.com/algorand/go-algorand/pull/4299))
* Cicd: add mac arm64 to integration tests ([#4167](https://github.com/algorand/go-algorand/pull/4167))
* Cicd: upgrade xcode on circleci macos executors ([#4188](https://github.com/algorand/go-algorand/pull/4188))
* Cicd: remove unused genesis in stash ([#4155](https://github.com/algorand/go-algorand/pull/4155))
* Config: set MaxAcctLookback to 4 ([#4296](https://github.com/algorand/go-algorand/pull/4296))
* Config: update vFuture consensus and configuration for 5MB blocks ([#4273](https://github.com/algorand/go-algorand/pull/4273))
* Consensus: introduce v33, v34 ([#4334](https://github.com/algorand/go-algorand/pull/4334))
* Crypto: remove batch verification flag ([#3781](https://github.com/algorand/go-algorand/pull/3781))
* Docs: Control the specs generated seperately from logic.LogicVersion ([#4361](https://github.com/algorand/go-algorand/pull/4361))
* Enhancement: Detect when valid partkeys represent an offline or closed account ([#4030](https://github.com/algorand/go-algorand/pull/4030))
* Github-actions: add Not-Yet-Enabled and Skip-Release-Notes labels ([#4196](https://github.com/algorand/go-algorand/pull/4196))
* Goal: Allow --signer to send txns from rekeyed accounts ([#4175](https://github.com/algorand/go-algorand/pull/4175))
* Goal: Make the -n flag (network name) optional. Get it from template file ([#4159](https://github.com/algorand/go-algorand/pull/4159))
* Ledger: restore pointer receivers and args from 4003 ([#4239](https://github.com/algorand/go-algorand/pull/4239))
* Ledger: shorter deltas lookback implementation (320 rounds project) ([#4003](https://github.com/algorand/go-algorand/pull/4003))
* Loadgenerator: add multiple accounts config option ([#4321](https://github.com/algorand/go-algorand/pull/4321))
* Logging: Add a way to inject an external logger. ([#4158](https://github.com/algorand/go-algorand/pull/4158))
* Metrics: Don&apos;t allocate when invoking the Inc() fastpath ([#4193](https://github.com/algorand/go-algorand/pull/4193))
* Network: make txBacklogSize responsive to block size ([#4377](https://github.com/algorand/go-algorand/pull/4377))
* Optimization: Use bits package for Muldiv. 266x speedup ([#4210](https://github.com/algorand/go-algorand/pull/4210))
* Tests: extended logging on expect test abort ([#4343](https://github.com/algorand/go-algorand/pull/4343))
* Tests: cluster scenarios for 2022-07 ([#4331](https://github.com/algorand/go-algorand/pull/4331))
* Tests: touch fields_string.go so everything is rebuilt in codegen verification ([#4330](https://github.com/algorand/go-algorand/pull/4330))
* Tests: Make e2e subs report individual results better ([#4286](https://github.com/algorand/go-algorand/pull/4286))
* Tests: Fix typo in ledger_test.go ([#4297](https://github.com/algorand/go-algorand/pull/4297))
* Tests: Support multiple e2e test archives. ([#4284](https://github.com/algorand/go-algorand/pull/4284))
* Tests: Fail codegen_verification if dump_genesis.sh is bad ([#4277](https://github.com/algorand/go-algorand/pull/4277))
* Tests: use `T.TempDir` to create temporary test directory ([#4256](https://github.com/algorand/go-algorand/pull/4256))
* Tests: fixes to catchpoint e2e tests ([#4236](https://github.com/algorand/go-algorand/pull/4236))
* Tests: pingpong fixes and heap watch reporting ([#4069](https://github.com/algorand/go-algorand/pull/4069))
* Tools: adapt loadgenerator to cluster testing ([#4324](https://github.com/algorand/go-algorand/pull/4324))
* Tools: Fixing updater to accept m1 (Darwin arm64) ([#4099](https://github.com/algorand/go-algorand/pull/4099))
## Bugfixes
* AVM: Make `txn FirstValidTime` and `block` opcode available in logicsigs ([#4371](https://github.com/algorand/go-algorand/pull/4371))
* Algod: fix issues causing database is locked sqlite error ([#4110](https://github.com/algorand/go-algorand/pull/4110))
* Bug Fix: Adds ephemeral Flag and Better Error messages ([#4245](https://github.com/algorand/go-algorand/pull/4245))
* Catchup: Download StateProofVotersLookback  more amount of blocks if needed ([#4392](https://github.com/algorand/go-algorand/pull/4392))
* Catchpointdump: fix downloading logic ([#4171](https://github.com/algorand/go-algorand/pull/4171))
* Goal: Fix source map mappings key and use relative line values ([#4198](https://github.com/algorand/go-algorand/pull/4198))
* Ledger: fix accountsMu usage ([#4280](https://github.com/algorand/go-algorand/pull/4280))
* Ledger: remove txtail from data race test ([#4315](https://github.com/algorand/go-algorand/pull/4315))
* Ledger: Initialize the accountUpdatesLedgerEvaluator properly ([#4456](https://github.com/algorand/go-algorand/pull/4456))
* Ledger: fix txtail restoring from catchpoints ([#4460](https://github.com/algorand/go-algorand/pull/4460))
* Ledger: extend catchpoint blocks lookback ([#4463](https://github.com/algorand/go-algorand/pull/4463))
* REST API: Change State Proof message to no longer be embedded ([#4395](https://github.com/algorand/go-algorand/pull/4395))
* State Proofs: update state proof totals calculation ([#4445](https://github.com/algorand/go-algorand/pull/4445))
* Tests: un-shadow loadgen privateKeys var ([#4380](https://github.com/algorand/go-algorand/pull/4380))
* Tests: fix TestAssetValidRounds ([#4351](https://github.com/algorand/go-algorand/pull/4351))
* Tests: fix TestAccountsCanSendMoney ([#4354](https://github.com/algorand/go-algorand/pull/4354) [#4374](https://github.com/algorand/go-algorand/pull/4374) [#4379](https://github.com/algorand/go-algorand/pull/4379))
* Tests: close ledger after TestCatchupUnmatchedCertificate ([#4348](https://github.com/algorand/go-algorand/pull/4348))
* Tests: simplify TestWebsocketNetworkMessageOfInterest ([#4341](https://github.com/algorand/go-algorand/pull/4341))
* Tests: pass fixture by pointer instead of by value, since it contains a mutex ([#4310](https://github.com/algorand/go-algorand/pull/4310))
* Tests: fix TestParticipationDB_Locking ([#4265](https://github.com/algorand/go-algorand/pull/4265))
* Tests: make SP e2e tests easier for arm ([#4402](https://github.com/algorand/go-algorand/pull/4402))
* Tests: Remove using unreleased semicolon support in AVM test
* Tests: ledger reload accessing txtail history ([#4473](https://github.com/algorand/go-algorand/pull/4473))
* Tools: goal logging send fixes ([#4281](https://github.com/algorand/go-algorand/pull/4281))
* Txns: Allow &quot;empty&quot; accounts to be Senders if someone else pays ([#4151](https://github.com/algorand/go-algorand/pull/4151))
## Activations (previously in vFuture)
* AVM: Add bn256 pairing opcodes experimentally ([#4013](https://github.com/algorand/go-algorand/pull/4013))
* AVM: base64_decode can decode padded or unpadded encodings ([#4015](https://github.com/algorand/go-algorand/pull/4015))
* AVM: Allow immutable access to foreign app accounts ([#3994](https://github.com/algorand/go-algorand/pull/3994))
* AVM: Unify inner transaction ID calculation ([#3927](https://github.com/algorand/go-algorand/pull/3927))
* AVM: replace opcodes ([#4129](https://github.com/algorand/go-algorand/pull/4129))
* AVM: Set proper costs for json_ref ([#4096](https://github.com/algorand/go-algorand/pull/4096))
* StateProofs: New block header field - SHA256 merkle root of the transactions ([#3829](https://github.com/algorand/go-algorand/pull/3829))
* StateProofs: fix GetProof endpoint response ([#3985](https://github.com/algorand/go-algorand/pull/3985))
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)



