
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.20.1-stable/daemon/algod/api/algod.oas3.yml). 
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

An endpoint to generate participation keys, network optimization, and other enhancements around catchpoints and catchup are included in this release.

Both the crash and state proof databases now default to the 'hot' data directory.

# What's New
* Participation key generation endpoint: a requested feature to allow the ability to generate API keys from the REST endpoint, provided you have the admin token.

# Changelog

## New Features
* API: Add participation key generation endpoint to algod API ([#5781](https://github.com/algorand/go-algorand/pull/5781))
* Txhandler: applications rate limiter ([#5734](https://github.com/algorand/go-algorand/pull/5734))

## Enhancements
* API: minor style improvements in keygen code. ([#5786](https://github.com/algorand/go-algorand/pull/5786))
* AVM: preserve line/column for assembler warnings ([#5796](https://github.com/algorand/go-algorand/pull/5796))
* AVM: Reorganize the crypto opcodes a bit to simplify incentive work ([#5787](https://github.com/algorand/go-algorand/pull/5787))
* Algocfg: Add print option to algocfg. ([#5824](https://github.com/algorand/go-algorand/pull/5824))
* Build: bump github.com/consensys/gnark-crypto from 0.12.0 to 0.12.1 ([#5822](https://github.com/algorand/go-algorand/pull/5822))
* Catchpoint: store certs with blocks during catchpoint restore ([#5798](https://github.com/algorand/go-algorand/pull/5798))
* Catchup: increase followLatestBackoff to 100ms ([#5838](https://github.com/algorand/go-algorand/pull/5838))
* Catchup: use specialized backoff behavior for follower mode ([#5836](https://github.com/algorand/go-algorand/pull/5836))
* Catchup: Dynamic parallel catchup ([#5802](https://github.com/algorand/go-algorand/pull/5802))
* Catchup: fetchAndWrite/fetchRound quit early on errNoBlockForRound ([#5809](https://github.com/algorand/go-algorand/pull/5809))
* Catchup: Provide more information to client when requested block not available ([#5819](https://github.com/algorand/go-algorand/pull/5819))
* Cgo: Properly manage memory passing from cgo to go on Batch Verifiers ([#5700](https://github.com/algorand/go-algorand/pull/5700))
* Chore: Cut out some useless allocations when computing payset commitments ([#5840](https://github.com/algorand/go-algorand/pull/5840))
* Chore: Remove one allocate per hash by using generics. ([#5829](https://github.com/algorand/go-algorand/pull/5829))
* Cleanup: Use Go 1.19 atomic types ([#5792](https://github.com/algorand/go-algorand/pull/5792))
* Config: add EnableGossipService option ([#5832](https://github.com/algorand/go-algorand/pull/5832))
* Config: move crash and stateproof DB defaults to hot dir ([#5817](https://github.com/algorand/go-algorand/pull/5817))
* Config: Update description for IncomingConnectionsLimit ([#5789](https://github.com/algorand/go-algorand/pull/5789))
* Docs: Add comment to initConsensusProtocols. ([#5791](https://github.com/algorand/go-algorand/pull/5791))
* Follower: update follower node error messages. ([#5797](https://github.com/algorand/go-algorand/pull/5797))
* Ledger: support WaitWithCancel for unsuccessful WaitForBlock API calls ([#5814](https://github.com/algorand/go-algorand/pull/5814))
* State Proofs: add block hash to LightBlockHeader ([#5663](https://github.com/algorand/go-algorand/pull/5663))

## Bugfixes
* Catchup: Fix empty cert if ledger already has a block ([#5846](https://github.com/algorand/go-algorand/pull/5846))
* Catchup: pause catchup if ledger lagging behind ([#5794](https://github.com/algorand/go-algorand/pull/5794))
* Cicd: Fix RPM repository updating ([#5790](https://github.com/algorand/go-algorand/pull/5790))
* Ledger: make catchpoint generation backward compatible ([#5598](https://github.com/algorand/go-algorand/pull/5598))
* Tests: Fix flaky TestAccountSelected test ([#5788](https://github.com/algorand/go-algorand/pull/5788))

## Protocol Upgrade
This release does not contain a protocol upgrade.

---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

* State Proofs: add block hash to LightBlockHeader ([#5663](https://github.com/algorand/go-algorand/pull/5663))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

