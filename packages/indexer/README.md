
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.3.1/api/indexer.oas3.yml). 
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

Indexer 3+ uses Conduit for data loading. This is a change from the 2.x version, which managed data loading internally. See our [Using Conduit to Populate an Indexer Database](https://github.com/algorand/conduit/blob/master/docs/tutorials/IndexerWriter.md) tutorial for more information on how to use Conduit.

## Overview

This hotfix addresses a panic that occurs when requesting a block with group resource sharing.

## Changelog
* bc627b1 Patch: Potential fix for panic on call to block w/ group resource sharing. (#1590)

**Full Changelog**: https://github.com/algorand/indexer/compare/v3.3.0...v3.3.1

---
[Docker images for this release are available on Docker Hub.](https://hub.docker.com/r/algorand/indexer)

