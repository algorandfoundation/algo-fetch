
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.21.0-stable/daemon/kmd/api/swagger.json). 
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

| **IMPORTANT**<br /> **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec: https://github.com/algorandfoundation/specs/tree/925a46433742afb0b51bb939354bd907fa88bf95  |
|---|

# Overview

This release introduces dynamic round times, as well as additional AVM opcodes. **This release contains a consensus upgrade, and will require upgrades of conduit/indexer as well.**

# What's New

* Dynamic round times, which as configured will have the effect of shortening average round times
* AVM: Elliptic curve opcodes on pairing friendly curves.
* AVM: Opcode costs of LogicSigs is pooled across a transaction group.
* AVM: Additional opcodes `box_splice` and `box_resize`

# Changelog
## Enhancements
* AVM: Add `global GenesisHash` ([#5858](https://github.com/algorand/go-algorand/pull/5858))
* AVM: Add box_splice and box_resize opcodes ([#5750](https://github.com/algorand/go-algorand/pull/5750))
* Consensus: Enable dynamic round times in vfuture. ([#5860](https://github.com/algorand/go-algorand/pull/5860))
* Docs: participation key lifecycle. ([#5847](https://github.com/algorand/go-algorand/pull/5847))
* Network: fixes to public address support ([#5851](https://github.com/algorand/go-algorand/pull/5851))
* Round Times: Period 0 deadline timeout ([#5850](https://github.com/algorand/go-algorand/pull/5850))
* Round Times: Set minimum dynamic filter timeout to 2500ms. ([#5853](https://github.com/algorand/go-algorand/pull/5853))
* Tests: wait longer in TestTotalWeightChanges for larger nightly test network ([#5841](https://github.com/algorand/go-algorand/pull/5841))
## Bugfixes
* Network: Use peer address after proxy fix for app rate limiter if available ([#5848](https://github.com/algorand/go-algorand/pull/5848))
* Simulate: Properly handle failing clear state programs ([#5842](https://github.com/algorand/go-algorand/pull/5842))
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)


