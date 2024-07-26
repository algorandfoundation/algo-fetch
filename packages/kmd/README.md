
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.7.2-stable/daemon/kmd/api/swagger.json). 
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

Bandwidth optimization for non-participating nodes and golang 1.17 upgrade.

# What's New
* Non-participating nodes do not receive gossiped proposed transactions by default
* Building from source now supported for M1 Mac
* Golang 1.17 upgrade

**Note**

A new flag was added to `update.sh` that will enable checksum and signature verification on the downloaded `updater` archive with the goal that at some point in the future, this will be the default. This requires that `gpg` and `sha256sum` are available on the system to be able to perform the checks. To start using this, pass `-verify` when calling the script. If `-verify` is not explicitly passed, `update.sh` will function the same as before. 

# Changelog
## New Features
* Build: Bump golang to 1.17.9/Mac M1 Support ([#3919](https://github.com/algorand/go-algorand/pull/3919))
## Enhancements
* Algod: Add a sourcemap flag for compile endpoint ([#3938](https://github.com/algorand/go-algorand/pull/3938))
* Algod API: Remove errant base64 docs reference ([#3982](https://github.com/algorand/go-algorand/pull/3982))
* Algokey: Add -v flag to get the version ([#4004](https://github.com/algorand/go-algorand/pull/4004))
* Build: Add install_buildtools.sh to check_deps.sh error message ([#3921](https://github.com/algorand/go-algorand/pull/3921))
* Ci: use tag to determine channel if possible ([#4017](https://github.com/algorand/go-algorand/pull/4017))
* Ci: add simple codecov config ([#3997](https://github.com/algorand/go-algorand/pull/3997))
* Cleanup: replace crypto.HashObj(Transaction) with Transaction.ID() ([#3958](https://github.com/algorand/go-algorand/pull/3958))
* Devops: Use Cloudflare API token instead of auth key ([#4039](https://github.com/algorand/go-algorand/pull/4039))
* Dryrun: Return EvalDeltas for failed executions in Dryrun ([#3929](https://github.com/algorand/go-algorand/pull/3929))
* Metrics: collect and report Go runtime.metrics ([#4041](https://github.com/algorand/go-algorand/pull/4041))
* Network: Non-participating Nodes Request Tx Gossip Only If Forcefetchtransactions: true ([#3918](https://github.com/algorand/go-algorand/pull/3918))
* Tealdbg: Add hidden &quot;generate-docs&quot; command ([#3830](https://github.com/algorand/go-algorand/pull/3830))
* Tests: Support e2e-go tests when repo is not installed in GOPATH. ([#3949](https://github.com/algorand/go-algorand/pull/3949))
* Tools: Add benchmark warnings for PRs and push graphs for commits into master ([#3998](https://github.com/algorand/go-algorand/pull/3998))
* Transaction Sync: Transition test ([#3882](https://github.com/algorand/go-algorand/pull/3882))
## Bugfixes
* Agreement: fix typo in bandwidthFilter_test ([#4028](https://github.com/algorand/go-algorand/pull/4028))
* Ci: ensure msgp generator has been run and is clean ([#3978](https://github.com/algorand/go-algorand/pull/3978))
* Developer Tools: Add manjaro support to build script ([#3893](https://github.com/algorand/go-algorand/pull/3893))
* Dryrun: Split dryrun cost field into BudgetConsumed and BudgetAdded ([#3957](https://github.com/algorand/go-algorand/pull/3957))
* E2e Tests: Fixes for e2e test runs ([#3948](https://github.com/algorand/go-algorand/pull/3948))
* Fix: place updater in same directory as update.sh ([#3983](https://github.com/algorand/go-algorand/pull/3983))
* Metrics: update node_exporter to support Linux diskstats ([#4047](https://github.com/algorand/go-algorand/pull/4047))
* Metrics: make metrics easier to use with prometheus ([#4020](https://github.com/algorand/go-algorand/pull/4020))
* Race Condition: Add lock around catchpointsMu to avoid race condition ([#3944](https://github.com/algorand/go-algorand/pull/3944))
* AVM: Allow app downgrades in old protocol versions ([#4086](https://github.com/algorand/go-algorand/pull/4086))
* Network: message-of-interest tiny bug fix ([#4107](https://github.com/algorand/go-algorand/pull/4107))

## Protocol Upgrade
This release does not contain a protocol upgrade.

## vFuture

vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

### New Features

* AVM: Add bn256 pairing opcodes experimentally ([#4013](https://github.com/algorand/go-algorand/pull/4013))

### Enhancements

* AVM: base64_decode can decode padded or unpadded encodings ([#4015](https://github.com/algorand/go-algorand/pull/4015))
* AVM: Allow immutable access to foreign app accounts ([#3994](https://github.com/algorand/go-algorand/pull/3994))
* AVM: Unify inner transaction ID calculation ([#3927](https://github.com/algorand/go-algorand/pull/3927))
* Stateproofs: New block header field - SHA256 merkle root of the transactions ([#3829](https://github.com/algorand/go-algorand/pull/3829))
* Stateproofs: fix GetProof endpoint response ([#3985](https://github.com/algorand/go-algorand/pull/3985))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

