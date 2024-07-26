
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.15.0-stable/daemon/kmd/api/swagger.json). 
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

This release includes the new simulate endpoint for evaluating transactions, networking optimizations, and lays the groundwork for better configuration management and conduit support.

⚠️ **Minor breaking change for goal users**: The `goal node catchup` functionality when run with no arguments has changed. You will now be prompted to confirm the action if a catchpoint label is not fed as an argument to the `catchup` command. Please revisit any automation around fast-catchup a node and ensure they are properly adapted.

# What&apos;s New
* Connection deduplication: improved networking code
  *  Relay Runners -- enable this feature by setting the node `PublicAddress` config.json value to its public endpoint address (eq. to SRV address including port number) to optimize its bandwidth usage
* Simulate endpoint: local evaluation of transactions
  * Ever wondered what effects your transaction could have on the blockchain state? This feature is for you! Now you can evaluate your transactions before sending them out to the network. See [here](https://medium.com/algorand/try-before-you-buy-on-algorand-5acd1b9617d1) for more information.
* Profiles for algocfg: a set of profiles for configuration defaults
  * Node configurations can be tricky! Use this feature to get started on properly configuring your node. 
* Algod follower mode: a new operation mode for use with upcoming conduit release
* New private network default template and automatic start
  *  Executing `goal network create --rootdir "ANY_DIRECTORY" --start` will create and start a private network using the default private network template. This is great for testing your dApps on a private network before deploying them on a public network.

Refer to our developer release article [here](https://developer.algorand.org/articles/whats-new-in-algorand-3150/) for more information on these features! 

# Changelog
## New Features
* Algod: Additional simulation result information ([#4439](https://github.com/algorand/go-algorand/pull/4439))
* Network: connection deduplication ([#4695](https://github.com/algorand/go-algorand/pull/4695))
* Perf: Separate the txn specific operations from StreamVerifier ([#5132](https://github.com/algorand/go-algorand/pull/5132))
## Enhancements
* API: Update state delta type, handler ([#5123](https://github.com/algorand/go-algorand/pull/5123))
* AVM: Teal macros ([#4737](https://github.com/algorand/go-algorand/pull/4737))
* Agreement: update AttachReceivedAt to handle compound (PP) messages ([#5142](https://github.com/algorand/go-algorand/pull/5142))
* Algocfg: Add relay profile, algocfg profile cmd ([#5069](https://github.com/algorand/go-algorand/pull/5069))
* Algod: Make simulation endpoint non-experimental ([#5159](https://github.com/algorand/go-algorand/pull/5159))
* Algod: Modify `EvalTracer` design and improve testing for failures ([#5071](https://github.com/algorand/go-algorand/pull/5071))
* Algod: Rename enums by default ([#5089](https://github.com/algorand/go-algorand/pull/5089))
* Algod: split SetFdSoftLimit calls for relay and non-relay nodes ([#5070](https://github.com/algorand/go-algorand/pull/5070))
* Algorelay: Fix typo in relayCmd.go ([#5135](https://github.com/algorand/go-algorand/pull/5135))
* Build: update C++ flags for recent Mac compiler warnings ([#5050](https://github.com/algorand/go-algorand/pull/5050))
* Build(deps): bump github.com/aws/aws-sdk-go from 1.16.5 to 1.33.0 ([#4955](https://github.com/algorand/go-algorand/pull/4955))
* Ci: upgrade test_nightly infra to large ([#5054](https://github.com/algorand/go-algorand/pull/5054))
* Cicd: Adding github release notes template ([#5044](https://github.com/algorand/go-algorand/pull/5044))
* Container: support kmd ([#4984](https://github.com/algorand/go-algorand/pull/4984))
* Deploy Templates: Recipe Changes ([#5155](https://github.com/algorand/go-algorand/pull/5155))
* Development: tool to convert validated blocks. ([#5048](https://github.com/algorand/go-algorand/pull/5048))
* Devmode: Allow DevMode + FollowMode configurations. ([#5157](https://github.com/algorand/go-algorand/pull/5157))
* Doc: Fix the inline comment for proposalAccepted ([#4889](https://github.com/algorand/go-algorand/pull/4889))
* Docs: add follower node documentation. ([#5181](https://github.com/algorand/go-algorand/pull/5181))
* Docs: Message pack information. ([#5160](https://github.com/algorand/go-algorand/pull/5160))
* Enhancement: minor change in `agreement/type.go` comment, numbers are not matching ([#5186](https://github.com/algorand/go-algorand/pull/5186))
* Feat(algocfg): add development profile and profile descriptions. ([#5164](https://github.com/algorand/go-algorand/pull/5164))
* Goal: catchup without args prompts to continue ([#5165](https://github.com/algorand/go-algorand/pull/5165))
* Goal: goal network create default templates ([#4891](https://github.com/algorand/go-algorand/pull/4891))
* Goal: allow ConfigJSONOverride in local network templates ([#5017](https://github.com/algorand/go-algorand/pull/5017))
* Goal: resolve data dir code duplication ([#5073](https://github.com/algorand/go-algorand/pull/5073))
* Goal: add --start option for network create command ([#4902](https://github.com/algorand/go-algorand/pull/4902))
* Ledger: turn deferredCommitContext.newBase into a function ([#5093](https://github.com/algorand/go-algorand/pull/5093))
* Lint: Check for references to loop variables ([#5105](https://github.com/algorand/go-algorand/pull/5105))
* Network: add OutgoingMessage disconnectReason field ([#5147](https://github.com/algorand/go-algorand/pull/5147))
* Network: Ignore invalid tags ([#4517](https://github.com/algorand/go-algorand/pull/4517))
* Node: Add follower node for sync mode ([#5009](https://github.com/algorand/go-algorand/pull/5009))
* Refactor: Push test-only functionality of storage interfaces into test-interface. ([#5175](https://github.com/algorand/go-algorand/pull/5175))
* Telemetry: fine-grained breakdown of AssembleBlockStats.StopReason ([#5191](https://github.com/algorand/go-algorand/pull/5191))
* Tests: Fix t.Parallel() errors in cmd package ([#4991](https://github.com/algorand/go-algorand/pull/4991))
* Tests: Fix t.Parallel() errors in netdeploy package ([#4993](https://github.com/algorand/go-algorand/pull/4993))
* Tests: No Cache Testing in ledger ([#5058](https://github.com/algorand/go-algorand/pull/5058))
* Tests: reenable catchpoint tests ([#4419](https://github.com/algorand/go-algorand/pull/4419))
* Tools: Remove vbconvert ([#5133](https://github.com/algorand/go-algorand/pull/5133))
* Txhandler: Move streamverifer out of txn go ([#5039](https://github.com/algorand/go-algorand/pull/5039))
## Bugfixes
* API: lower default for MaxHeaderBytes. ([#5171](https://github.com/algorand/go-algorand/pull/5171))
* API: Incorrect KvDelta in StateDeltaToLedgerDelta ([#5084](https://github.com/algorand/go-algorand/pull/5084))
* Algocfg: Bug fix - Add colon to indicate port specification ([#5193](https://github.com/algorand/go-algorand/pull/5193))
* Algod: Refactor AccountData conversion ([#5098](https://github.com/algorand/go-algorand/pull/5098))
* Circleci: Fix cached Results issue in self-hosted runner ([#5137](https://github.com/algorand/go-algorand/pull/5137))
* Devmode: Fix devmode networking ([#5182](https://github.com/algorand/go-algorand/pull/5182))
* E2e-test: Fix follower e2e test ([#5114](https://github.com/algorand/go-algorand/pull/5114))
* Fix: Disable LRU `flushPendingWrite` warning if disabled ([#5184](https://github.com/algorand/go-algorand/pull/5184))
* Fix: guard addPeer from adding peers who are closing ([#5151](https://github.com/algorand/go-algorand/pull/5151))
* Fix(follower): add experimental tag to deltas endpoint. ([#5169](https://github.com/algorand/go-algorand/pull/5169))
* Fix(follower): update test that defines a follower relay. ([#5162](https://github.com/algorand/go-algorand/pull/5162))
* Goal: fix for goal node status crash - no longer getting block ([#5100](https://github.com/algorand/go-algorand/pull/5100))
* Goal: allow for relative dataDir via -d cmd option ([#5067](https://github.com/algorand/go-algorand/pull/5067))
* Ledger: fix error shadowing in onlineAccountsNewRoundImpl ([#5188](https://github.com/algorand/go-algorand/pull/5188))
* Node: Fix time since last block. ([#5113](https://github.com/algorand/go-algorand/pull/5113))
* Tests: Fix TestStreamVerifierPoolShutdown ([#5152](https://github.com/algorand/go-algorand/pull/5152))
* Tests: Fix test by sorting results ([#5103](https://github.com/algorand/go-algorand/pull/5103))
* Tests: Add start anchor to paralleltest exclusion regex ([#5046](https://github.com/algorand/go-algorand/pull/5046))
## Protocol Upgrade
This release does not contain a protocol upgrade.


---
**NOTE**
vFuture changes are *not* yet available in MainNet or TestNet but can be used in private networks. 

* AVM: Go19 ecdsa curve check ([#4917](https://github.com/algorand/go-algorand/pull/4917))

---
## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)


