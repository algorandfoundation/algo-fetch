
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.3.0/api/indexer.oas3.yml). 
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

Indexer 3.x uses Conduit for data loading. This is a change from the 2.x version, which managed data loading internally. See our [Using Conduit to Populate an Indexer Database](https://github.com/algorand/conduit/blob/master/docs/tutorials/IndexerWriter.md) tutorial for more information on how to use Conduit.

## Overview

This release includes a performance improvement to transaction by address searches. When paginating through results, subsequent calls would often get slower and slower until eventually timing out completely.

## Changelog
* 0f41c6d Fix markdown syntax. (#1576)
* 89c3fed Indexer 2.x to 3.x Migration FAQ. (#1575)
* 2517879 Update system requirements. (#1581)
* e498ab7 Update the Indexer 3.x migration document. (#1579)
* 76f36ea Use INDEXER_DATA throughout the entrypoint script in docker (#1583)
* 6ef871c add txn_participation.round filter (#1578)

**Full Changelog**: https://github.com/algorand/indexer/compare/v3.2.0...v3.3.0

---
[Docker images for this release are available on Docker Hub.](https://hub.docker.com/r/algorand/indexer)

