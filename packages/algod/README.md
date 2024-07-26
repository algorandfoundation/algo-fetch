
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.9.4-stable/daemon/algod/api/algod.oas3.yml). 
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

Fix for node_exporter and added timeout to stateproof API.

# Changelog

## Bug Fixes
- StateProofs: Add timeout to stateproof API ([#4515](https://github.com/algorand/go-algorand/pull/4515))
- Metrics: TagCounter gains a tag set to filter on ([#4503](https://github.com/algorand/go-algorand/pull/4503))
- Metrics: set filtered TagCounters from init([) (#4524](https://github.com/algorand/go-algorand/pull/4524))
- Tools: Update node_exporter to include algorand/node_exporter#6 ([#4518](https://github.com/algorand/go-algorand/pull/4518))

## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

