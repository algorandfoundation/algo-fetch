
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.4.2-stable/daemon/algod/api/algod.oas3.yml). 
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

| **IMPORTANT**<br />  **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec: https://github.com/algorandfoundation/specs/tree/85e6db1fdbdef00aa232c75199e10dc5fe9498f6
|---|

# Highlights

* **Contract to contract:** Smart contracts can now call other smart contracts, using the new inner transaction type appl
* **State Proof keys:** online participants will now generate Post Quantum-secure Falcon keys when renewing online status. These keys will be used to generate Algorand State Proofs
* **Batch Verification:** nodes can now group signatures in batches for faster verification

# Important Note

Note: Users running a local consensus private network with vFuture may need to rebuild the local network when upgrading their MainNet node.

# Changelog

1. Agreement
    * New Features
        * Integrate State Proof keys (#2990)
        * Batch verification to speed up the process of verifying the digital signature of several transactions (#3031)
    * Enhancements
        * Verify VotingKeys run time (#3551)
        * Removed hard    *coded constant in `sortition.go`. (#3558)
        * V31 consensus upgrade (#3553)
    * Bug Fix - add a fallback for missing state proof keys in participation file (#3619)
1. AVM (Algorand Virtual Machine)
    * New Feature
        * Contract to contract support (#3397)
        * vFuture: base64 decode opcode (#3220, #3288)
1. Algod
    * New Feature
        * ParticipationRegistry - StateProof loading methods (#3261)
        * PKI State Proof Incremental Key Loading (#3281)
    * Enhancements
        * Update Algod's `/Accounts/ACCOUNTID` endpoint to return **Minimum Balance** information (#3287)
        * Enumerate conditions that might cause this fetchAndWrite to return false (#3301)
        * Add config.DeadlockDetectionThreshold (#3339)
        * Removing C/crypto dependencies from `data/abi` package (#3375)
        * Delete unused `AtomicCommitWriteLock()` (#3383)
        * Deprecate `FastPartitionRecovery` from `ConsensusParams` (#3386)
        * Add context to (most) agreement logged writes (#3411)
    * Bug Fixes
        * Use updated sumhash lib (#3684)
        * Remove batch verification flag from the compact certs struct (#3644)
        * Deregister metrics tracker on close (#3661)
        * Fix ParticipationKeyResponse type (#3264)
        * Fix: stop the completed catchup service (#3299)
        * blocks service: avoid serving blocks past service shutdown (#3303)
1. Goal
    * Enhancements
        * Support reference types in `goal app method` (#3275)
        * Support app creation in `goal app method` (#3353)
        * Update `goal account info` to return **Minimum Balance** information (#3287)
        * Update `goal app method` handling of args and return values (#3352)
        * Allow setting manager, reserve, freeze, and clawback at goal asset create (#3369)
    * Bug Fixes
        * Goal asset send does not respect fee set to 0 (#3592)
        * Separate Txn and PartKey validity for `goal account renewpartkey` (#3286)
1. Ledger
    * Enhancements
        * Signer.KeyDilution need not depend on config package (#3265)
        * Add totals checks into acct updates tests (#3367)
    * Bug Fixes
        * Fix `NextRewardsState()` (#3403)
        * Fix a potential problem of committing non    *uniform consensus versions (#3453)
        * Add stateproofid to accountdata.clearonlinestate() (#3643)
        * Fix ledger.eval code comments (#3623)
1. Network
    * Enhancements
        * Add a hash prefix for ARCs    *related hashes (#3298)
        * Delete unused constant (#3379)
        * Use rejecting limit listener in `WebsocketNetwork` (#3380)
        * Faster node shutdown (#3416)
1. Tx Sync
    * Bug Fix     * tx sync was incorrectly validating transactions (#3554)
1. REST API
    * Enhancements
        * Remove unused DeleteParticipationIdResponse type (#3500)
        * Adding another field for lsig disassembly (#3577)
        * Limit number of simultaneous REST connections (#3326)
    * Bug Fix     * fix prove bug on api (#3632)
1. Logging
    * Enhancements
        * Add Version KV to telemetry events (#3341)
        *  Avoid generating log error on EnsureValidatedBlock / EnsureBlock (#3424)
        * Fix warning message on restore crash db (#3455)
1. Tools
    * New Features
        * add catchpointdump into tools package (#3590)
        *  Add 'algokey part keyreg' (#3689)
        *  Dryrun: Add gloads test (#3664)
        * Support logs and inner transactions in tealdbg (#3547)
        * algodump is a tcpdump    *like tool for algod's network protocol (#3166)
        * Add convertAddress tool. (#3304)
    * Enhancements
        * Optimize catchpointdump utility (#3561)
        * catchpointdump: allow print filters (#3566)
        * Add filter fields to catchpointdump net command (#3598)
        * Tools: Goal node create improvements (#3639)
        * Tools: Decrease partkey rounds to 3mil for feature networks (#3662)
        * tealdbg: increase intermediate reading/writing buffers (#3335)
    * Bug Fix     * set genesis proto version in catchpointdump (#3596)
1. Tests
    * Enhancements
        * Improve testaccountinformationv2 (#3624)
        * set gotestsum format to standard: Verbose (#3634)
        * Test for catchup stop on completion (#3306)
        * Add test to exercise lookup corner cases (#3376)
        * Disable parallelism for e2e-go tests (#3242)
        * fix e2e.sh mixed indent characters (#3266)
        * Disable flaky test (#3268)
        * Add Custom Scenario for Performance Testing (#3278)
        * Reword partitiontest lint message. (#3297)
        * testing: improve new networks spawning performance (#3308)
        * Add help and fish mode to e2e interactive mode. (#3313)
        * Add slightly more coverage to TestAcctUpdatesLookupRetry (#3384)
    * Bug Fixes
        * Rollback changes to ParticipationExpirationTest (#3611)
        * Fix bug in TestParticipationAccountsExpirationFuture/TestParticipationAccountsExpirationNonFuture (#3616)
        * Fix participation key expiration tests (#3621)
        * Fix randomly failing testpseudonodefailedenqueuedtasks (#3683)
        * Fix a typo in agreement test (#3651)
        * Add partitiontest to tests. (#3658)
          * Fix unit test TestAsyncTelemetryHook_QueueDepth (#2685)
          * Fix a data race in app tests (#3269)
          * TestEcdsa: fix flaky "tampering" of public key (#3282)
          * Fix random data race in TestAppAccountDataStorage (#3315)
          * Fix flaky test in randomized ABI encoding test (#3346)
          * Fix bug in testassetgroupcreatesenddestroy (#3631)
          * Remove parallel from txnproofs and fix timeout bug (#3628)
1. Other
    * Enhancements
        * Adding new scenario for feature networks (#3451)
        * Add bandwidth testing to perf pipeline (#3487)
        * Fixing telemetry ports for feature networks (#3497)
        * Update ledger README reference to trackers (#3540)
        * Add comment to help explain txntest.Txn rationale (#3574)
        * Moving windows build to Github Actions (#3575)
        * update THANKS.md file (#3595)
        * Changing golang version to 1.16.11 in go-algorand (#2825)
        * Updating Readme.md with circleci status badges (#3245)
        * Add qkniep to THANKS.md (#3320)
        * Adding method pseudo op to readme (#3338)
        * CircleCI pipeline change for binary uploads (#3381)
        * Feature Networks pipeline related changes (#3393)
        * Update license to 2022 (#3360)
        * Cicd: Limit pr type and category check to master branch (#3675)
        * Cicd: Adding pr type label checker (#3645)
        * Devops: Regen net.json for scenario2 test to include api endpoints for nodes. (#3654)
    * Bug Fixes
        * Fix typo Fulll to Full (#3456)
        * Revert `fillBytes` method to `bigIntToBytes` for lower golang version (#3498)
        * Revert "Changing golang version to 1.16.11 in go-algorand" (#3506)
        * Moving to centos stream 8 (#3560)
        * Revert golang1.16 arm32 changes (#3615)
        * Remove `make gen` from ci    *build (#3617)
        * Fix formatting for CircleCI badges (#3272)
        * Fix algorand specs link (#3309)
        * Devops: Fix bandwidth testing (#3638)

## Additional Resources

- [Algorand Forum](https://forum.algorand.org)
- [Developer Documentation](https://developer.algorand.org)
