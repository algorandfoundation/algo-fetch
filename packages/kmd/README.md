
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.19.0-stable/daemon/kmd/api/swagger.json). 
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

In this release we add support for hot and cold data directories for algod, enhance the simulate endpoint by returning app initial states, and speed up starting up private networks by allowing pre-generation of keys. Backend support for future features are also included - stay tuned!

# What&apos;s New
* Hot/Cold data directories: Support for specifying different destinations for data instead of just a single data directory
* Pre-generated private network keys: Speed launching new private networks for development by re-using pre-generated keys
* Simulate: Return application initial states accessed during simulation
* Config: Add MaxBlockHistoryLookback option

# Changelog
## New Features
* Algod: Hot/Cold Data Directories and Resource Paths ([#5614](https://github.com/algorand/go-algorand/pull/5614))
* Docker: Support pregenerated keys in docker private networks ([#5735](https://github.com/algorand/go-algorand/pull/5735))
* Network: add P2PNetwork implementation ([#5640](https://github.com/algorand/go-algorand/pull/5640))
* Simulate: Return application initial states accessed during simulation ([#5686](https://github.com/algorand/go-algorand/pull/5686))
## Enhancements
* API: StartFastCatchup initialize parameter ([#5752](https://github.com/algorand/go-algorand/pull/5752))
* AVM: Generate langspec for each version ([#5629](https://github.com/algorand/go-algorand/pull/5629))
* Build: bump golang.org/x/net from 0.12.0 to 0.17.0 ([#5779](https://github.com/algorand/go-algorand/pull/5779))
* Build: bump github.com/consensys/gnark-crypto from 0.11.2 to 0.12.0 ([#5774](https://github.com/algorand/go-algorand/pull/5774))
* Chore: Refactor catchpoint tracking logic into config ([#5725](https://github.com/algorand/go-algorand/pull/5725))
* Chore: Put the three doc strings about each op together ([#5708](https://github.com/algorand/go-algorand/pull/5708))
* Config: Add MaxBlockHistoryLookback option ([#5749](https://github.com/algorand/go-algorand/pull/5749))
* Devops: update releases page GPG key mentions ([#5742](https://github.com/algorand/go-algorand/pull/5742))
* Docs: Update node config comments so that they can be used for doc generation. ([#5729](https://github.com/algorand/go-algorand/pull/5729))
* Dynamic-lambda: continue tracking the best proposal even after freezing ([#5701](https://github.com/algorand/go-algorand/pull/5701))
* Encoding: eliminate unnecessary allocations ([#5655](https://github.com/algorand/go-algorand/pull/5655))
* Feature: Disable EnableBlockServiceFallbackToArchiver by default. ([#5706](https://github.com/algorand/go-algorand/pull/5706))
* Goal: Add initialize option to &apos;goal node catchup&apos;. ([#5754](https://github.com/algorand/go-algorand/pull/5754))
* Goal: Add export and import options for genesis files during network creation ([#5672](https://github.com/algorand/go-algorand/pull/5672))
* P2p: Make p2p listen address configurable via config.NetAddress ([#5721](https://github.com/algorand/go-algorand/pull/5721))
* P2p: Return non-loopback multiaddr from Address() if available ([#5716](https://github.com/algorand/go-algorand/pull/5716))
* P2p: peerstore backed phonebook ([#5710](https://github.com/algorand/go-algorand/pull/5710))
* Perf: upgrade go-deadlock ([#5760](https://github.com/algorand/go-algorand/pull/5760))
* Performance: dynamic lambda ([#5654](https://github.com/algorand/go-algorand/pull/5654))
* Simulate: Enable on follower node & allow specifying starting round ([#5685](https://github.com/algorand/go-algorand/pull/5685))
* Teal: Report columns in TEAL source maps ([#5776](https://github.com/algorand/go-algorand/pull/5776))
* Tests: Fix flaky tealdbg unit test ([#5768](https://github.com/algorand/go-algorand/pull/5768))
* Tests: Remove flaky persistent peers test from wsNetwork ([#5772](https://github.com/algorand/go-algorand/pull/5772))
* Tests: Address flakiness with TestMergePrimarySecondaryRelayAddressListsPartialOverlap ([#5758](https://github.com/algorand/go-algorand/pull/5758))
* Tests: update TestCatchupOverGossip to be less parallel and use sub-tests ([#5731](https://github.com/algorand/go-algorand/pull/5731))
* Tools: Block Generator - allow exporting to files ([#5714](https://github.com/algorand/go-algorand/pull/5714))
## Bugfixes
* AVM: Cleanly handle broken switch/match programs ([#5782](https://github.com/algorand/go-algorand/pull/5782))
* Catchpoints: check EnableCatchupFromArchiveServers for ledgerFetcher ([#5783](https://github.com/algorand/go-algorand/pull/5783))
* Ci: fix scripts/create_and_deploy_recipe.sh build ([#5764](https://github.com/algorand/go-algorand/pull/5764))
* CICD: Fix RPM repository updating ([#5790](https://github.com/algorand/go-algorand/pull/5790))
* Devops: fix releases page links ([#5746](https://github.com/algorand/go-algorand/pull/5746))
* Docker: Do not disable telemetry if logging.config is present. ([#5769](https://github.com/algorand/go-algorand/pull/5769))
* Docker: Do not catchup if already initialized. ([#5756](https://github.com/algorand/go-algorand/pull/5756))
* Docker: Update docker config with node_exporter path. ([#5762](https://github.com/algorand/go-algorand/pull/5762))
* Revert &quot;ledger: Close the ledger at node shutdown&quot; ([#5705](https://github.com/algorand/go-algorand/pull/5705))
* Scripts(configure_dev): conditional tap homebrew ([#5573](https://github.com/algorand/go-algorand/pull/5573))
* Specs: Change spec generation for Foundation to handle _v*.md ([#5751](https://github.com/algorand/go-algorand/pull/5751))
* Tests: Fix simulate start round flaky test ([#5748](https://github.com/algorand/go-algorand/pull/5748))
* Tools: better heap data rendering ([#5761](https://github.com/algorand/go-algorand/pull/5761))
* Windows: Fix GC ([#5745](https://github.com/algorand/go-algorand/pull/5745))
## Protocol Upgrade
This release does not contain a protocol upgrade.


---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

* AVM: EC math ([#4924](https://github.com/algorand/go-algorand/pull/4924))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

