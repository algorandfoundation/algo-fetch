
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.18.0-stable/daemon/kmd/api/swagger.json). 
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
Go-Algorand 3.18.0 is a minor release introducing the ability for unnamed resources to be referenced from simulated transaction groups. The release also contains minor enhancements and bug fixes.

# What&apos;s New

* 🔮 Simulate: Transactions can now be evaluated by simulate without specifying foreign references (without populating apps/accounts/assets/box arrays). ([#5366](https://github.com/algorand/go-algorand/pull/5366))
* 🧱 Blocks Endpoint: Introducing Algod's `/v2/blocks/{round}/txids` endpoint. With this, you can now retrieve top level Transaction ID's in a given block. ([#5611](https://github.com/algorand/go-algorand/pull/5611))
* 🪪 API Authentication: Use the `DisableAPIAuth` configuration option to make Algod's public API endpoints accessible without providing an Authentication token. ([#5625](https://github.com/algorand/go-algorand/pull/5625))

# Important Note

To combat data corruption risk, a node will terminate if an I/O error is encountered during ledger db commit. Future go-algorand versions will introduce software internal mechanisms as well.

# Known Issue

Raspberry Pi ARM32 support is not available in this release due to compile issues. Please continue to use older versions in the mean time.

# Changelog
## New Features
* Ledger: generic kv trackers backend implementation ([#5488](https://github.com/algorand/go-algorand/pull/5488))
* Simulate: Add State Change to Exec Trace ([#5659](https://github.com/algorand/go-algorand/pull/5659))
* Simulate: Allow unnamed foreign resource access ([#5366](https://github.com/algorand/go-algorand/pull/5366))
* Simulate: Hash of Program Bytecodes in Simulation ([#5658](https://github.com/algorand/go-algorand/pull/5658))
* Txhandler: Enable ERL by default in configuration. ([#5683](https://github.com/algorand/go-algorand/pull/5683))

## Enhancements
* API: Disable API authentication ([#5625](https://github.com/algorand/go-algorand/pull/5625))
* AVM: Enable pooling of logicsig execution across a group ([#5528](https://github.com/algorand/go-algorand/pull/5528))
* AVM: Expose `global` fields to TEAL that return MBR for asset create/optin ([#5680](https://github.com/algorand/go-algorand/pull/5680))
* Algod: Add API Endpoint to fetch TxIDs from block ([#5611](https://github.com/algorand/go-algorand/pull/5611))
* Build: upgrade to go1.20.6 ([#5577](https://github.com/algorand/go-algorand/pull/5577))
* Build(deps): bump github.com/libp2p/go-libp2p from 0.29.0 to 0.29.1 ([#5647](https://github.com/algorand/go-algorand/pull/5647))
* Chore: Remove faulty assertion ([#5675](https://github.com/algorand/go-algorand/pull/5675))
* Clocks: tagged deadlines ([#5649](https://github.com/algorand/go-algorand/pull/5649))
* Goal: `--full-trace` keeps track of everything in exec trace ([#5609](https://github.com/algorand/go-algorand/pull/5609))
* Ledger: Remove redundant block header cache ([#5540](https://github.com/algorand/go-algorand/pull/5540))
* Ledger: increase locks granularity in lookupWithoutRewards ([#5527](https://github.com/algorand/go-algorand/pull/5527))
* Metrics: add counters for ledger locks trackerMu and accountsMu ([#5635](https://github.com/algorand/go-algorand/pull/5635))
* Metrics: add counters to broadcastSignedTxGroup ([#5588](https://github.com/algorand/go-algorand/pull/5588))
* Netdeploy: allow simple local net topologies ([#5612](https://github.com/algorand/go-algorand/pull/5612))
* Network: make GossipNode more independent from wsNetwork implementation ([#5634](https://github.com/algorand/go-algorand/pull/5634))
* P2p: Add delete/create to algons dnsaddr command ([#5631](https://github.com/algorand/go-algorand/pull/5631))
* P2p: in-memory peerstore ([#5664](https://github.com/algorand/go-algorand/pull/5664))
* P2p: multiaddr dns bootstrapping utils ([#5575](https://github.com/algorand/go-algorand/pull/5575))
* P2p: Add peerID and feature flag ([#5591](https://github.com/algorand/go-algorand/pull/5591))
* P2p: adding peerstore ([#5576](https://github.com/algorand/go-algorand/pull/5576))
* Phonebook: Persist initial phonebook peers; remove unused ExtendPeerList ([#5615](https://github.com/algorand/go-algorand/pull/5615))
* REST API: Allow fast track transaction broadcasting via txHandler ([#5535](https://github.com/algorand/go-algorand/pull/5535))
* Tools: add block-generator initial round to report. ([#5689](https://github.com/algorand/go-algorand/pull/5689))
* Tools: metrics files visualizer ([#5661](https://github.com/algorand/go-algorand/pull/5661))
* Tools: block-generator locked table retry and additional metrics ([#5653](https://github.com/algorand/go-algorand/pull/5653))
* Tools: block-generator option to delay before running scenario. ([#5694](https://github.com/algorand/go-algorand/pull/5694))
* Tools: precompile block-generator teal code ([#5642](https://github.com/algorand/go-algorand/pull/5642))
* Tools: use CommandContext to cancel conduit process. ([#5636](https://github.com/algorand/go-algorand/pull/5636))
* Tools: write block generator ledger output to a file ([#5630](https://github.com/algorand/go-algorand/pull/5630))
* Tools: additional generator lifecycle logging. ([#5627](https://github.com/algorand/go-algorand/pull/5627))
* Tools: option to run block generator test multiple times ([#5617](https://github.com/algorand/go-algorand/pull/5617))

## Bugfixes
* API: Describe WaitForBlock timeout behavior. ([#5587](https://github.com/algorand/go-algorand/pull/5587))
* Build: Remove n-algorand from wsnetwork partial overlap test. ([#5660](https://github.com/algorand/go-algorand/pull/5660))
* Catchup: make unsupported block handling more deterministic ([#5673](https://github.com/algorand/go-algorand/pull/5673))
* Cicd: Macos dependencies ([#5618](https://github.com/algorand/go-algorand/pull/5618))
* Ledger: fix error condition leaked from KV-related refactoring ([#5678](https://github.com/algorand/go-algorand/pull/5678))
* Ledger: Close the ledger at node shutdown ([#5668](https://github.com/algorand/go-algorand/pull/5668))
* Ledger: Clear Merkle Trie on Commit Error ([#5568](https://github.com/algorand/go-algorand/pull/5568))
* Libgoal: set FirstValid to LastRound to prevent early tnxs ([#5622](https://github.com/algorand/go-algorand/pull/5622))
* Revert &quot;ledger: increase locks granularity in lookupWithoutRewards&quot; ([#5620](https://github.com/algorand/go-algorand/pull/5620))
* Tests: fix close - commit data race in tracker tests ([#5619](https://github.com/algorand/go-algorand/pull/5619))
* Tools: test on CI regardless of modded file ([#5621](https://github.com/algorand/go-algorand/pull/5621))
## Protocol Upgrade
This release does not contain a protocol upgrade.

---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks.

* AVM: Expose `global` fields to TEAL that return MBR for asset create/optin ([#5680](https://github.com/algorand/go-algorand/pull/5680))


## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

