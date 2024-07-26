
# @awesome-algorand/kmd-fetch
> Fetch client for KMD

Generated KmdClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.0.1-stable/daemon/kmd/api/swagger.json). 
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




| **IMPORTANT**<br />  **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec: https://github.com/algorandfoundation/specs/tree/bc36005dbd776e6d1eaf0c560619bb183215645c|
|---|

# Highlights

This release features the 1.0 version of AVM, extending Algorand's smart contract capabilities for even greater composability. Highlights in this release include:

- Application transactions: the ability for smart contracts to execute transactions on directly on chain.
- App cost pooling: larger contract size, by combining the budgets across an application group.
- Increased account smart contract limit to 50
- More smart contract opcodes to improve composability (inner transaction references, verify ECDSA, log, and others)
- Debugging for itxn programs and include a bugfix for dryrun crashes. 

# Changes

1. AVM
    * Added
        * Add GroupID as an accessible global field in AVM (#2838)
        * Add opcodes for dynamically indexing into Txn array fields (#2847)
        * Implement verify ECDSA secp256k1 opcodes (#2852)
        * Introduce itxn to get inner transaction results (#2883)
        * Smart contracts can issue transactions (#2661)
        * loads and stores opcodes that take scratch slot from stack (#2853)
    * Changed
        * Better naming for extract opcodes (#2891)
        * Check if tx_field can be set with tables instead of switch (#2849)
        * Dry run should return opcode cost used (#2746)
        * Ensure that AssetCreator is not used before proto.LogicSigVersion=5 and unify field handling (#2784)
        * Expose nonparticipation txn field in teal (#2823)
        * Increase max app opt ins to 50 (#2750)
        * Make config.MaxLogCalls dependent on some consensus param (#2732)
        * Use math.bits intrinsics to simplify addw/mulw opcodes (#2839)
    * Fixed
        * Ensure disassemble/reassemble cycle works in testProg (#2745)
        * Increase coverage in AVM code and bug fix in account fields of tx_field (#2840)
1. Goal
    * Changed
        * Display app address in `goal app info` & show logs are binary in REST API (#2836)
        * Display extra pages in goal info commands (#2763)

    * Fixed
        * Fix enumeration bug with using Ledger Nano S and goal (#2822)
1. TEAL
    * Added
        * Enable debugging itxn programs (#2900)
    * Fixed
        * Fix dryrun crash on rewards calculation (#2894)
1. Ledger
    * Added
        * Add ledger.GetBlockAddresses() (#2872)
    * Changed
        * Fix overriding consensus parameters in evaluator. (#2811)
        * Simplify `startEvaluator()` (#2812)
1. Network
    * Fixed
        * Fix ParseHostOrURL and enable expect tests (#2772)
1. Tools
    * Changed
        * Improve error message in update.sh when updater is corrupt (#2766)
        * Netgoal - add account balance range (#2771)
1. Other
    * Changed
        * Add comments for protocol hash IDs and tags (#2774)
        * Checking CircleCI tests run once and only once (#2749)
        * Fix go vet issues (#2826)
        * Limit the number of buckets in `verifiedTransactionCache` to 3 (#2775)
        * Remove codegen from travis file (#2768)

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

