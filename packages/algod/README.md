
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.22.0-stable/daemon/algod/api/algod.oas3.yml). 
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

This release includes networking optimization improvements, as well as starts laying the groundwork for non-archival relays.

**Note: in this release, NetAddress will no longer automatically mark a node as archival, so if you were relying solely on NetAddress for this, you should also set `Archival: true` in your configuration before applying the upgrade.** This is a rare configuration, but if you only had NetAddress set, this release will progressively delete blocks from your database until the node only has recent blocks (probably over multiple days while staying caught up to the chain). The sqlite database will not reclaim this disk automatically, so you may want to run a vacuum after it's complete by shutting down the node and running: `sqlite3 data/mainnet-v1.0/ledger.block.sqlite "VACUUM"`

If you intend to become non-archival (formerly as an archival node), your best path forward is a fresh install.

# What&apos;s New
* New archival node profile and changes to NetAddress defaults
* Networking optimizations

# Changelog
## Enhancements
* API: optimize /transactions/pending/{txid} endpoint ([#5891](https://github.com/algorand/go-algorand/pull/5891))
* API: Make maps the right size from the start ([#5906](https://github.com/algorand/go-algorand/pull/5906))
* AVM: Add a lot of type annotations to opcodes ([#5902](https://github.com/algorand/go-algorand/pull/5902))
* AVM: report structure txn failure info ([#5875](https://github.com/algorand/go-algorand/pull/5875))
* AVM: Require every global field to get tested ([#5864](https://github.com/algorand/go-algorand/pull/5864))
* Algocfg: Introduce new archival node algocfg profile. ([#5893](https://github.com/algorand/go-algorand/pull/5893))
* Blockdb: bound max deleted blocks per blockdb sync ([#5910](https://github.com/algorand/go-algorand/pull/5910))
* Chore: Update testing to use current python SDK. ([#5861](https://github.com/algorand/go-algorand/pull/5861))
* Config: Archival mode is no longer automatically enabled when netAddress is s… ([#5904](https://github.com/algorand/go-algorand/pull/5904))
* Docs: Updates to SECURITY.md ([#5907](https://github.com/algorand/go-algorand/pull/5907))
* Docs: Eliminate a unicode character that causes trouble in doc generation ([#5866](https://github.com/algorand/go-algorand/pull/5866))
* Network: Like #5906, but for messageFilter, optimize cache mem and speed ([#5913](https://github.com/algorand/go-algorand/pull/5913))
* Txhandler: kick in ARL at 1/2 of a base backlog capacity ([#5873](https://github.com/algorand/go-algorand/pull/5873))
## Bugfixes
* AVM: Don&apos;t treat `any` as constant int in `loads`, `stores` ([#5884](https://github.com/algorand/go-algorand/pull/5884))
* Dryrun: Improve assembler error reporting ([#5889](https://github.com/algorand/go-algorand/pull/5889))
* Txhandler: fix ARL triggering without ERL ([#5872](https://github.com/algorand/go-algorand/pull/5872))

## Protocol Upgrade
This release does not contain a protocol upgrade.


---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

* AVM: Adding sumhash and falcon_verify ([#5599](https://github.com/algorand/go-algorand/pull/5599))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

