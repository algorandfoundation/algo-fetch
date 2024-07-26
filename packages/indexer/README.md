
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/2.6.0/api/indexer.oas3.yml). 
See the [upstream repository](https://github.com/algorand/indexer) for more information.

## Installation

```bash
npm install @awesome-algorand/indexer-fetch --save
```

### Usage

```typescript
import {IndexerClient} from '@awesome-algorand/indexer-fetch';

const client = new IndexerClient({
    BASE: 'https://testnet-idx.algonode.cloud/',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/indexer/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

# Highlights

Included in this release:

- Support for devMode
- Non-UTF-8 support for asset strings - return -b64 asset strings in most endpoints
- Fix for too many sequential queries (#553)
- Other refactoring and small bug fixes

# Changes

- Enhancements
  - Add devmode support to indexer
  - Add missing validation for b64 fields.
  - Define AddressRole type in `idb`
  - Delete old migrations (pre-2.4.0)
  - Delete other released migrations
  - Delete the reset functionality
  - Delete unused function
  - Deleted the deprecated variable from the import state
  - Improve a migration scheduler test.
  - Improvements in `idb/postgres/` and `reset.go`
  - Move signature type logic to `idb`
  - Move transaction type logic to `idb`
  - Store next round in import state
  - Testing - add a new subcommand to the block generator to run multiple scenarios and generate reports based on the results
  - Testing - keytype
  - Testing - large asset amount
  - Validator improvements
  - non utf8 support for asset strings
- Bug Fixes
  - Avoid leaking db transactions and rows
  - Copy the byte array in bytePtr()
  - Fix two small bugs in Health()
  - daemon: replace a sleep loop with a channel.
