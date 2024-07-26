
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.13.2-stable/daemon/algod/api/algod.oas3.yml). 
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

Updates to telemetry and reporting.

# What&apos;s New

* Better telemetry logging
* Report metrics on telemetry errors

# Changelog
## Enhancement
* telemetry: don't report let asyncTelemetryHook wrap and log its own errors([#4932](https://github.com/algorand/go-algorand/pull/4932))
* metrics: count telemetry server errors ([#4933](https://github.com/algorand/go-algorand/pull/4933))
* log: stderr offending large log messages([#4930](https://github.com/algorand/go-algorand/pull/4930))

## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

