
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.8.0-stable/daemon/algod/api/algod.oas3.yml). 
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
The goal command is now using the participation key REST API. A byproduct of this is that keys are no longer copied into the data directory, instead they are installed directly into the internal participation key registry.

# What's New
* Participation Key Interface cleanup
* Adding support for m1 builds to pipeline
* Other miscellaneous bug fixes and enhancements

# Changelog
## New Features
* CICD: Add m1 to build pipeline ([#4079](https://github.com/algorand/go-algorand/pull/4079))
## Enhancements
* AVM: Make it easier to move experimental opcode groups ([#4123](https://github.com/algorand/go-algorand/pull/4123))
* AVM: Track Scratch Slot Types ([#4064](https://github.com/algorand/go-algorand/pull/4064))
* CICD: update build pipeline for darwin-amd64 ([#4147](https://github.com/algorand/go-algorand/pull/4147))
* CICD: Optimizing CircleCI cache usage ([#4087](https://github.com/algorand/go-algorand/pull/4087))
* Devops: Define recipe for FastNet. ([#4066](https://github.com/algorand/go-algorand/pull/4066))
* Ledger: fix typo in error.go ([#4143](https://github.com/algorand/go-algorand/pull/4143))
* Metrics: specify telemetry hostname and instance name as prometheus labels ([#4089](https://github.com/algorand/go-algorand/pull/4089))
* Misc: Add helper functions to genesis. ([#4111](https://github.com/algorand/go-algorand/pull/4111))
* Pingpong: improve transaction scheduling ([#3478](https://github.com/algorand/go-algorand/pull/3478))
* PKI: Enable full usage of REST API to install participation keys ([#4002](https://github.com/algorand/go-algorand/pull/4002))
## Bugfixes
* AVM: Version downgrade check ported to master ([#4093](https://github.com/algorand/go-algorand/pull/4093)) (in v3.7.2)
* Bug Fix: Adds validity round check for failing tests ([#4085](https://github.com/algorand/go-algorand/pull/4085))
* Catchpointdump: fixes ([#4130](https://github.com/algorand/go-algorand/pull/4130))
* Ledger: fix flakiness in `TestReproducibleCatchpointLabels` ([#4074](https://github.com/algorand/go-algorand/pull/4074))
* Network: message-of-interest tiny bugfix ([#4107](https://github.com/algorand/go-algorand/pull/4107)) (in v3.7.2)
* Tools: Fixing calls to pingpong with deprecated flag --REST ([#4070](https://github.com/algorand/go-algorand/pull/4070))
## Other
## Protocol Upgrade
This release does not contain a protocol upgrade.

---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

## New Features
* AVM: replace opcodes ([#4129](https://github.com/algorand/go-algorand/pull/4129))

## Enhancements
* AVM: Set proper costs for json_ref ([#4096](https://github.com/algorand/go-algorand/pull/4096))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

