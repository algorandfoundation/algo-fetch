
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v2.10.1-stable/daemon/algod/api/algod.oas3.yml). 
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

# Highlights

This is a maintenance release focused around many test improvements and other optimizations.

# Changes

1. REST API
    * Bug Fix
        * Use the strict json encoder to correctly encode maps with numeric fields in REST API v2 endpoints. (#2611)
        * Fix installation of oapi-codegen. (#2668)
2. TEAL
    * Tests
        * Extend global and txn field tests for all TEAL versions and protocols. (#2669)
        * Create a quine to test `app_params_get AppApprovalProgram` (#2682)
3. Ledger
    * Enhancements
        * Replace Balances.PutWithCreatable() to new functions that notify the COW that a creatable was created or deleted. (#2638)
        * Add a public Eval() function for indexer. (#2662)
        * Added support for batch verification of signatures. (#2578)
        * Record modified local creatable states in state delta. (#2680)
        * Add individual program length checks into updateApplication (#2699)
        * Return an error in `EncodeSignedTxn()` and `DecodeSignedTxn()` if consensus protocol is unknown. (#2708)
        * Add additional functions to improve type tracking of AVM stack manipulation opcodes. (#2710)
4. Node
    * Bug Fixes
        * Disable networking on devmode (#2601)
5. Metrics
    * Bug Fix
        * Remove Gauge timeout (#2508)
6. Goal
    * Bug Fix
        * Use the appIdx instead of txn app id when calling goal app create. (#2720)
7. Other
    * New Features
        * Add builds, build tests, and integration tests in CircleCI. (#2444)
    * Enhancements
        * Update our feature_request.md template for new Issues (#2568)
        * Enable ineffassign linter (#2574)
        * Remove old msgp 1.1.47 code from go.mod/go.sum (#2615)
        * Implement partitiontest_linter (#2635)
        * Update systemd-steup.sh to install system.json (#2651)
        * Generate Slack notifications for rel/nightly failures (#2643)
        * Added golangci-lint action. (#2647)
        * Fix a go lint issue. (#2688)
        * Renamed no_gimme env var to skip_go_installation (#2696)
        * Consolidate testing options SKIP_E2E_SUBS and E2E_SUBS_ONLY. (#2705)
        * Update the Circle CI branch filters to run "nightly"/longer tests over "rel/" and "hotfix/" branches. (#2729)
    * Tools
        * Replace KMD usage in the pingpong utility with direct signing. (#2653)

## Protocol Upgrade

This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

