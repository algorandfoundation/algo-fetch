
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.4.0/api/indexer.oas3.yml). 
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
## Important

**This release supports go-algorand 3.21, which itself includes a consensus upgrade. Runners will have to upgrade their indexer/conduit installs in order to remain on the network once the upgrade goes into effect.** 

Indexer v3.4.0 uses Conduit for data loading. This is a change from the 2.x version (no longer supported as of November 1, 2023), which managed data loading internally. See our [Using Conduit to Populate an Indexer Database](https://github.com/algorand/conduit/blob/master/docs/tutorials/IndexerWriter.md) tutorial for more information on how to use Conduit.

## Changelog
* 3e9446a Merge pull request #1590 from gmalouf/resource-shared-accounts-indexing
* d1008ac Potential fix for panic on call to block w/ group resource sharing.
* 50a40d7 Typo fix.
* 92a5e7c Bump go-algorand-sdk dependency to v2.4.0 to support v39 consensus protocol.
* 9ef21ad Merge pull request #1588 from gmalouf/protocol-update-sync
* ad95dba ci: Use parameterized version in conduit notice. (#1585)

**Full Changelog**: https://github.com/algorand/indexer/compare/v3.3.0...v3.4.0
---
[Docker images for this release are available on Docker Hub.](https://hub.docker.com/r/algorand/indexer)

