
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.11.2-stable/daemon/kmd/api/swagger.json). 
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
* This release disables cadaver file generation by default. This is a performance enhancement.
* This release fixes the issue of when an account had many resources, it could break catching up from a catchpoint.
* This release contains improvements to network propagation, through opportunistic compression.

# Changelog
## Enhancements
* Algod: turn off cadaver trace file by default ([#4676](https://github.com/algorand/go-algorand/pull/4676))
* Pingpong: add genaccountsoffset flag and tool to print test account addresses ([#4628](https://github.com/algorand/go-algorand/pull/4628))
* Tests: Consistent resource/account struct tests ([#4669](https://github.com/algorand/go-algorand/pull/4669))
* V1 Deprecation: Remove algod and kmd client affinity and consolidate APIs to use newest version ([#4641](https://github.com/algorand/go-algorand/pull/4641))
* Batch-verify: Return failed sig indexes ([#4614](https://github.com/algorand/go-algorand/pull/4614))
* Cicd: reduce mmnet LastPartKeyRound to 50k ([#4625](https://github.com/algorand/go-algorand/pull/4625))
* Devops: Update betanet model recipe, move NPN hosts to regions not shared by hosts for relays and nodes ([#4588](https://github.com/algorand/go-algorand/pull/4588))
* Goal: don't mark app-arg as hidden for account command ([#4629](https://github.com/algorand/go-algorand/pull/4629))
* Metrics: Remove labels from gauge metrics ([#4606](https://github.com/algorand/go-algorand/pull/4606))
* Network: proposal payload compression ([#4589](https://github.com/algorand/go-algorand/pull/4589))
* Tests: extend transactions signature verification testing ([#4623](https://github.com/algorand/go-algorand/pull/4623))

## Bugfixes
* Batchverifier: preserve the memory until the end ([#4672](https://github.com/algorand/go-algorand/pull/4672))
* Catchpoints: don&apos;t make duplicate account hashes in prepareNormalizedBalances ([#4668](https://github.com/algorand/go-algorand/pull/4668))
* Pingpong: fix config check for GeneratedAccountsMnemonics ([#4662](https://github.com/algorand/go-algorand/pull/4662))
* Tools: fix lagging cinfo.AppParams data structure in PingPong ([#4613](https://github.com/algorand/go-algorand/pull/4613))

## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

