
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.12.2-stable/daemon/kmd/api/swagger.json). 
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

| **IMPORTANT**<br /> **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec: https://github.com/algorandfoundation/specs/tree/44fa607d6051730f5264526bf3c108d51f0eadb6 |
|---|

<div align="center">

| **IMPORTANT**<br /> **The keys used to sign the release packages have been renewed.** <br /> See the [instructions below](#how-to-update-signing-key) on how to update for a specific system |
|---|

</div>

# What&apos;s New
* AVM: box storage is now available. Apps can create an unlimited number of boxes for storing unstructured data. 
* AVM: `switch`, `match`, and frame pointer opcodes are now available. These enable more efficient TEAL programs in terms of program length and computation. 
* Bugfixes related to catchpoints, performance enhancements, and additional logging.

# Changelog
## New Features
* AVM: match, pushints, and pushbytess opcodes ([#4645](https://github.com/algorand/go-algorand/pull/4645))
* AVM: Add support for Boxes ([#4149](https://github.com/algorand/go-algorand/pull/4149))
* Catchpoint Dump Utility: catchpointdump now supports tar.gz ([#4743](https://github.com/algorand/go-algorand/pull/4743))

## Enhancements
* API: bump max size of teal source and dryrun ([#4633](https://github.com/algorand/go-algorand/pull/4633))
* Perf Test: Transaction group handle/verify ([#4652](https://github.com/algorand/go-algorand/pull/4652))
* Consensus: v36 upgrade ([#4722](https://github.com/algorand/go-algorand/pull/4722))
* Lint: enable go vet printf format arg checks for logging ([#4679](https://github.com/algorand/go-algorand/pull/4679))
* Logging: demote LeaseInLedgerError from warn to info level ([#4685](https://github.com/algorand/go-algorand/pull/4685))
* Netgoal: Update netgoal generate flags and variables ([#4656](https://github.com/algorand/go-algorand/pull/4656))
* Performance: Agreement state serialization using msgp ([#4644](https://github.com/algorand/go-algorand/pull/4644))
* Performance: don&apos;t create child cow in TestTransactionGroup ([#4706](https://github.com/algorand/go-algorand/pull/4706))
* Prefetcher: enable prefetcher for assets and apps ([#4352](https://github.com/algorand/go-algorand/pull/4352))
* Tests: 20221012 improvements ([#4639](https://github.com/algorand/go-algorand/pull/4639))
* Tools: Allow specification of Reward Pool Account Balance in Genesis ([#4643](https://github.com/algorand/go-algorand/pull/4643))
* API: Update oapi-codegen version to v1.12.0 of our fork ([#4707](https://github.com/algorand/go-algorand/pull/4707))
* Accountdb: add migration 8 for resetting accounthashes on betanet ([#4822](https://github.com/algorand/go-algorand/pull/4822))
* Algod: Consolidate models ([#4714](https://github.com/algorand/go-algorand/pull/4714))
* Algod: Delete v1 usage from client and remove `V2` prefix from APIs ([#4767](https://github.com/algorand/go-algorand/pull/4767))
* Algod: Migrate internal uses of v1 algod API to v2 ([#4684](https://github.com/algorand/go-algorand/pull/4684))
* Alphanet: update vAlpha5 to point to v36 ([#4729](https://github.com/algorand/go-algorand/pull/4729))
* Catchpoints: Enrich catchpoint generation and status with KV metadata ([#4808](https://github.com/algorand/go-algorand/pull/4808))
* Ci: Notify when CircleCI build failures for master and rel branches only ([#4789](https://github.com/algorand/go-algorand/pull/4789))
* Ci: Notify when GHA workflow fails on master ([#4791](https://github.com/algorand/go-algorand/pull/4791))
* Docs: Update SECURITY.md ([#4782](https://github.com/algorand/go-algorand/pull/4782))
* Goal: Add URL to goal asset info. ([#4731](https://github.com/algorand/go-algorand/pull/4731))
* Metrics: add TransactionGroupTxSyncHandled ([#4815](https://github.com/algorand/go-algorand/pull/4815))
* Metrics: split out /Transaction/AssembleBlock metrics ([#4795](https://github.com/algorand/go-algorand/pull/4795))
* Netgoal: start with at least 20GB RootStorage ([#4779](https://github.com/algorand/go-algorand/pull/4779))
* Performance: turn cache misses during assembly into cache hits during eval ([#4617](https://github.com/algorand/go-algorand/pull/4617))
* Performance: Don&apos;t preallocate rarely used maps in MakeStateDelta ([#4715](https://github.com/algorand/go-algorand/pull/4715))
* Tech Debt: Reduce number of dependencies. ([#4750](https://github.com/algorand/go-algorand/pull/4750))
* Telemetry: add TCP RTT info collection ([#4745](https://github.com/algorand/go-algorand/pull/4745))
* Tests: Squelch macOS accept incoming network connections notifications ([#4814](https://github.com/algorand/go-algorand/pull/4814))
* Tests: large generated accountdb cluster test ([#4772](https://github.com/algorand/go-algorand/pull/4772))
* Tests: Fix txid-string comparison ([#4792](https://github.com/algorand/go-algorand/pull/4792))
* Tests: Move box test artifacts to a temp directory ([#4771](https://github.com/algorand/go-algorand/pull/4771))
* Tests: Lint for unparallelized tests without explicit reason ([#4746](https://github.com/algorand/go-algorand/pull/4746))
* Tools: update catchpointdump &apos;database&apos; and &apos;database check&apos; commands to handle staging tables and KVs ([#4802](https://github.com/algorand/go-algorand/pull/4802))
* Txhandler: add more metric ([#4786](https://github.com/algorand/go-algorand/pull/4786))
## Bugfixes
* AVM: fix early eval exits for Debugger ([#4719](https://github.com/algorand/go-algorand/pull/4719))
* Bug-fix: Blank Import Needs Commenting for Indexer&apos;s Lint ([#4720](https://github.com/algorand/go-algorand/pull/4720))
* Bug-fix: return v2 spec from swagger endpoint ([#4697](https://github.com/algorand/go-algorand/pull/4697))
* Catchpoint: actualize limit constants and fix txtail table init ([#4703](https://github.com/algorand/go-algorand/pull/4703))
* Devops: update docker container for docker hub ([#4723](https://github.com/algorand/go-algorand/pull/4723))
* Dispenser: add input validation ([#4713](https://github.com/algorand/go-algorand/pull/4713))
* Network: align duplicateFilterCount to prevent panic on 32-bit platforms ([#4702](https://github.com/algorand/go-algorand/pull/4702))
* Catchpoints: Add the kv hashes into the trie ([#4812](https://github.com/algorand/go-algorand/pull/4812))
* Ci: Fix GHA failure notification trigger condition ([#4810](https://github.com/algorand/go-algorand/pull/4810))
* Cow: always process KvMods to add OldData to mods when building StateDeltas ([#4804](https://github.com/algorand/go-algorand/pull/4804))
* Daemon: pool error messages and old txn expiration ([#4755](https://github.com/algorand/go-algorand/pull/4755))
* Goal: Change asset commands to use AccountAssetInformation ([#4758](https://github.com/algorand/go-algorand/pull/4758))
* Tests: Fix resolver test endpoint ([#4784](https://github.com/algorand/go-algorand/pull/4784))
* Tests: Fix types in assertions and change to using libgoal client when getting `PendingTransaction` information ([#4754](https://github.com/algorand/go-algorand/pull/4754))
* Tests: disable TestWebsocketNetworkTelemetryTCP on CI ([#4827](https://github.com/algorand/go-algorand/pull/4827))
* Txhandler: service does not restart after node catching up ([#4809](https://github.com/algorand/go-algorand/pull/4809))
* Txsyncer: service does not start after node catching up ([#4768](https://github.com/algorand/go-algorand/pull/4768))

## Activations (previously in vFuture)
* AVM: Switch opcode ([#4458](https://github.com/algorand/go-algorand/pull/4458))
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

## How to Update Signing Key

Debian/Ubuntu

```
curl -o - https://releases.algorand.com/key.pub | sudo tee /etc/apt/trusted.gpg.d/algorand.asc
```

RHEL/RPM

```
curl -O https://releases.algorand.com/rpm/rpm_algorand.pub
sudo rpmkeys --import rpm_algorand.pub
```

