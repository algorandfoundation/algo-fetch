
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.23.1-stable/daemon/kmd/api/swagger.json). 
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
This release is focused on providing the necessary software functionality for non-archival relays on the network. It includes promoting archival nodes to first class citizens that can be resolved as their own class of nodes.

# What&apos;s New
* Full support for **non-archival relay nodes**
* SRV record resolution of dedicated archival nodes

# Changelog
## New Features
* Network: Class-based Peer Selector ([#5937](https://github.com/algorand/go-algorand/pull/5937))
## Enhancements
* Archival Support: Remove configurable support for catching up from &quot;archivers&quot; ([#5920](https://github.com/algorand/go-algorand/pull/5920))
* Blocks: Bump min to save based on catchpoint support ([#5927](https://github.com/algorand/go-algorand/pull/5927))
* Build: upgrade to go 1.20.14 ([#5949](https://github.com/algorand/go-algorand/pull/5949))
* Docker: Bump debian version in algod container ([#5955](https://github.com/algorand/go-algorand/pull/5955))
* Feat: add support to display mnemonic discreetly for `algokey generate` ([#5886](https://github.com/algorand/go-algorand/pull/5886))
* Netgoal: Use --last-part-key-round when generating a goalnet template ([#5912](https://github.com/algorand/go-algorand/pull/5912))
* Network: Penalize peer/class rankings when peer does not have catchpoint ([#5959](https://github.com/algorand/go-algorand/pull/5959))
* Network: Support simple liveness check via http on gossip server port. ([#5944](https://github.com/algorand/go-algorand/pull/5944))
* Network: Archival node DNS Resolution ([#5940](https://github.com/algorand/go-algorand/pull/5940))
## Bugfixes
* Cicd: fix package signing issues ([#5934](https://github.com/algorand/go-algorand/pull/5934))
* Network: use network context for DNS operations in readFromSRV ([#5936](https://github.com/algorand/go-algorand/pull/5936))
## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

