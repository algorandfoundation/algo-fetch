
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.14.2-stable/daemon/algod/api/algod.oas3.yml). 
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

This release contains enhancements to networking capabilities such as our transaction handling and relay connection limits. In addition, we are including telemetry enhancements to better monitor the performance of the network.

# What's New

* Batch verify transactions for more efficient signature verification
* Introduce elastic rate limiter to manage congestion from noisy peers
* Increase max incoming connections limit
* Decrease max connections per IP
* Increase default gossip fanout for relays
* `goal node status` now additionally reports consensus voting progress

# Changelog
## New Features
* Algod: Add experimental endpoint for simulating transactions against a real block evaluator ([#4436](https://github.com/algorand/go-algorand/pull/4436))
* Tools: pingpong total latency ([#4757](https://github.com/algorand/go-algorand/pull/4757))
* Txhandler: batch transactions to the verifier ([#4621](https://github.com/algorand/go-algorand/pull/4621))
* Txhandler: Random Early Detection for backlog queue ([#4797](https://github.com/algorand/go-algorand/pull/4797))

## Enhancements
* AVM: Clearer cost benchmarks, and a nice optimization of b== and b< ([#5010](https://github.com/algorand/go-algorand/pull/5010))
* AVM-abi: Update functions migrated to AVM-abi library ([#4979](https://github.com/algorand/go-algorand/pull/4979))
* Algocfg: Clarify config file loading error. ([#5025](https://github.com/algorand/go-algorand/pull/5025))
* Algod: update copyright comment to 2023 ([#4957](https://github.com/algorand/go-algorand/pull/4957))
* Ci: Split paralleltest lint excludes to minimize merge conflicts ([#5002](https://github.com/algorand/go-algorand/pull/5002))
* Cicd: add container build ([#4927](https://github.com/algorand/go-algorand/pull/4927))
* Cleanup: remove unused node.PoolStats() ([#4956](https://github.com/algorand/go-algorand/pull/4956))
* Config: add CadaverDirectory and prevent algod from starting if cadaver.init() fails ([#4740](https://github.com/algorand/go-algorand/pull/4740))
* Config: add HeartbeatUpdateInterval ([#4832](https://github.com/algorand/go-algorand/pull/4832))
* Container: update documentation and remove unused tools ([#4982](https://github.com/algorand/go-algorand/pull/4982))
* Debug: unmarshal and print transaction distribution ([#5008](https://github.com/algorand/go-algorand/pull/5008))
* Enhancement: `goal` Error UX Improvement ([#4951](https://github.com/algorand/go-algorand/pull/4951))
* Enhancement: Add missing ArgEnum fields, tweaks to immediate note ([#4903](https://github.com/algorand/go-algorand/pull/4903))
* Goal: Added consensus upgrade fields to node status API & goal output ([#4800](https://github.com/algorand/go-algorand/pull/4800))
* Metrics: use uint64 for Counter and Gauge types ([#4911](https://github.com/algorand/go-algorand/pull/4911))
* Metrics: count telemetry server errors ([#4933](https://github.com/algorand/go-algorand/pull/4933))
* Network: new default gossip fanout setting for relays ([#5005](https://github.com/algorand/go-algorand/pull/5005))
* Network: increase max incoming connections limit ([#5018](https://github.com/algorand/go-algorand/pull/5018))
* REST API: update WaitForBlock summary ([#4910](https://github.com/algorand/go-algorand/pull/4910))
* Tech Debt: Remove topAccountListener. ([#5027](https://github.com/algorand/go-algorand/pull/5027))
* Tech Debt: Remove unused NetworkFetcher. ([#5028](https://github.com/algorand/go-algorand/pull/5028))
* Telemetry: Remove unused TelemetryOperation ([#4935](https://github.com/algorand/go-algorand/pull/4935))
* Telemetry: don't report ES client errors ([#4940](https://github.com/algorand/go-algorand/pull/4940))
* Telemetry: don't report let asyncTelemetryHook wrap and log its own errors ([#4932](https://github.com/algorand/go-algorand/pull/4932))
* Tests: Fix t.Parallel() errors in shared package ([#4989](https://github.com/algorand/go-algorand/pull/4989))
* Tests: Fixes saved from 4981 revert ([#4996](https://github.com/algorand/go-algorand/pull/4996))
* Tests: Fix `t.Parallel()` errors in `data` package ([#4981](https://github.com/algorand/go-algorand/pull/4981))
* Tests: plot heap data ([#4968](https://github.com/algorand/go-algorand/pull/4968))
* Tests: Enable more parallel tests in data/transactions/logic/evalAppTxn_test.go ([#4937](https://github.com/algorand/go-algorand/pull/4937))
* Tests: Fix `t.Parallel()` errors in `data/transactions/logic` package ([#4931](https://github.com/algorand/go-algorand/pull/4931))
* Tests: fix dependency on global counters ([#4921](https://github.com/algorand/go-algorand/pull/4921))
* Tools: nodecfg without dns ([#4967](https://github.com/algorand/go-algorand/pull/4967))
* Util/s3: enable more credential providers ([#4929](https://github.com/algorand/go-algorand/pull/4929))
* Algod: Replace `logic.DebuggerHook` with `logic.EvalTracer` interface ([#4438](https://github.com/algorand/go-algorand/pull/4438))
* Lint: fix warnings ([#5047](https://github.com/algorand/go-algorand/pull/5047))

## Bugfixes
* AVM: Catch any panic in edcsa verifying ([#4368](https://github.com/algorand/go-algorand/pull/4368))
* Agreement: fix receivedAt proposal performance timing ([#5041](https://github.com/algorand/go-algorand/pull/5041))
* Bugfix: Remove accidental devtesting output. ([#5033](https://github.com/algorand/go-algorand/pull/5033))
* Bugfix: removed redundant unlock, potentially causing double unlock ([#4928](https://github.com/algorand/go-algorand/pull/4928))
* Build: fix build after #4979 ([#5032](https://github.com/algorand/go-algorand/pull/5032))
* Ci: Fix PartitionTest Github Action ([#5006](https://github.com/algorand/go-algorand/pull/5006))
* Devops: Adding old artifact cleanup for self-hosted runners ([#4909](https://github.com/algorand/go-algorand/pull/4909))
* Ledger: rearrange blockqueue start/stop ([#4964](https://github.com/algorand/go-algorand/pull/4964))
* Ledger: bulletin leaking waiters fix ([#4962](https://github.com/algorand/go-algorand/pull/4962))
* Node: Add logging thread to node monitoring wg ([#4934](https://github.com/algorand/go-algorand/pull/4934))
* Scripts(compute_branch): fix incorrect conditional ([#4987](https://github.com/algorand/go-algorand/pull/4987))
* Test Fix: flaky TestStreamVerifierCtxCancelPoolQueue ([#4980](https://github.com/algorand/go-algorand/pull/4980))
* Tests: 'Revert Tests Fix t.Parallel() errors in data package' ([#4995](https://github.com/algorand/go-algorand/pull/4995))
* Updater: fix update.sh parsing of latest version ([#4994](https://github.com/algorand/go-algorand/pull/4994))
* Util/s3: remove extra println ([#5024](https://github.com/algorand/go-algorand/pull/5024))
* AVM: Fix opBytesLt for len(rhs) < len(lhs) ([#5051](https://github.com/algorand/go-algorand/pull/5051))
* algod: split SetFdSoftLimit calls for relay and non-relay nodes ([#5070](https://github.com/algorand/go-algorand/pull/5070))
* goal: fix for goal node status crash - no longer getting block ([#5100](https://github.com/algorand/go-algorand/pull/5100))

## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)


