
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.5.1-stable/daemon/algod/api/algod.oas3.yml). 
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

| **IMPORTANT**<br />  **This release requires a protocol upgrade.** <br /> This release contains a consensus protocol upgrade, which implements the following spec: https://github.com/algorandfoundation/specs/tree/d5ac876d7ede07367dbaa26e149aa42589aac1f7
|---|

# Important Notes
* This release contains a database migration. As a result, expect node upgrades to take longer than usual - **15 minutes for participating nodes and 1 hr for archival nodes.** The node software and hardware profile will ultimately determine the length of the upgrade.
* **Catchpoint files will be temporarily unavailable.** New catchpoint files will not be generated until the protocol upgrade is completed.
* Unlimited Assets and Applications will only be available after the protocol upgrade is complete.
* **Some API Endpoints change.** Please see below for further details.

# Highlights

**Unlimited Assets & Applications**
Accounts can now create and opt into an unlimited number of assets and applications. The REST API endpoints have changed to make it easier to work with more data:
* [GET /v2/accounts/{account-id}](https://github.com/algorand/go-algorand/blob/53cb3c5d9cff06400717fa877ffaa2d57bd91411/daemon/algod/api/algod.oas2.json#L146)
  * Account endpoints may exclude the attached resources with a new "**exclude=all**" parameter, which defaults to "none".
  * Algod may return a 400 error for /v2/accounts/{address} if the total number of account assets and apps opted into or created by that address exceeds a configurable maximum, if nonzero limit is set (default is 100K).
* [GET /v2/accounts/{address}/assets/{asset-id}](https://github.com/algorand/go-algorand/blob/53cb3c5d9cff06400717fa877ffaa2d57bd91411/daemon/algod/api/algod.oas2.json#L227)
* [GET /v2/accounts/{address}/applications/{application-id}](https://github.com/algorand/go-algorand/blob/53cb3c5d9cff06400717fa877ffaa2d57bd91411/daemon/algod/api/algod.oas2.json#L304)
  * Resources for an account can be retrieved with new endpoints.

# Changelog
## New Features
* Algod: Unlimited assets/apps support ([#3652](https://github.com/algorand/go-algorand/pull/3652))

## Enhancements
* Agreement: Configurable incoming message buffer sizes ([#3705](https://github.com/algorand/go-algorand/pull/3705))
* Algod: Refactor registry operations ([#3647](https://github.com/algorand/go-algorand/pull/3647))
* Crypto: Call batchverificationimpl from onetimesignatureverifier.verify ([#3759](https://github.com/algorand/go-algorand/pull/3759))
* Enhancement: Document instructions for updating indexer e2e test input ([#3704](https://github.com/algorand/go-algorand/pull/3704))
* Ledger: Replace ledger.lookupresource with lookup{application,asset} ([#3708](https://github.com/algorand/go-algorand/pull/3708))
* Ledger: updates and tests for AccountInformation REST API ([#3564](https://github.com/algorand/go-algorand/pull/3564))
* Ledger: Move prefetcher to a new package ([#3735](https://github.com/algorand/go-algorand/pull/3735))
* Participation Key Registry: Complete cleanup ([#3768](https://github.com/algorand/go-algorand/pull/3768))
* Prefetcher: Add eval vs prefetcher alignment tests ([#3729](https://github.com/algorand/go-algorand/pull/3729))
* REST API: Use errorresponse instead of accountserrorresponse ([#3737](https://github.com/algorand/go-algorand/pull/3737))
* REST API: ledger refactor: changes to REST API to support more resources ([#3542](https://github.com/algorand/go-algorand/pull/3542))
* REST API: Split msgpack API type AccountResourceModel into two ([#3679](https://github.com/algorand/go-algorand/pull/3679))
* Telemetry: Replace the uuid package dependency ([#3715](https://github.com/algorand/go-algorand/pull/3715))
* Tests: Update test5massetsscenario e2e test ([#3750](https://github.com/algorand/go-algorand/pull/3750))
* Tests: Improve 6m asset testing performance ([#3749](https://github.com/algorand/go-algorand/pull/3749))
* Tests: improve goal-partkey: Info test logging ([#3753](https://github.com/algorand/go-algorand/pull/3753))
* Tests: E2e testing c2c with clearstateprogram ([#3693](https://github.com/algorand/go-algorand/pull/3693))
* Tests: Test 6m assets/apps per account ([#3739](https://github.com/algorand/go-algorand/pull/3739))

## Bugfixes

* Agreement: Fix fuzzer test networkfacade clock implementation ([#3716](https://github.com/algorand/go-algorand/pull/3716))
* Agreement: Add messages handled/dropped tagcounters ([#3712](https://github.com/algorand/go-algorand/pull/3712))
* Agreement: Add validatedat to proposal type and blockacceptedeventdetails message ([#3703](https://github.com/algorand/go-algorand/pull/3703))
* Fast catchup: Retry peers fetching ([#3711](https://github.com/algorand/go-algorand/pull/3711))
* Account Manager: Avoid taking locks for long period of time ([#3717](https://github.com/algorand/go-algorand/pull/3717))
* Agreement: Add warning when decoding proposal of an unsupported consensus version ([#3730](https://github.com/algorand/go-algorand/pull/3730))
* Ledger: Fix lookuplatest when the ledger advances ([#3769](https://github.com/algorand/go-algorand/pull/3769))
* Prefetcher: ensure the grouptask.incompletecount is allocated on a 64: Bit aligned address ([#3740](https://github.com/algorand/go-algorand/pull/3740))
* REST API: Fix check for record.appparams in accountapplicationinformation ([#3707](https://github.com/algorand/go-algorand/pull/3707))
* REST API: Dryrun scratch slot type fix ([#3736](https://github.com/algorand/go-algorand/pull/3736))
* REST API: Fix typo in openapi json and yml files ([#3741](https://github.com/algorand/go-algorand/pull/3741))
* Telemetry: Fix version configuration ([#3718](https://github.com/algorand/go-algorand/pull/3718))
* Tests: Fix testassetconfig test to support unlimited assets ([#3710](https://github.com/algorand/go-algorand/pull/3710))

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

