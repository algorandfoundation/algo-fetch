
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.1.0/api/indexer.oas3.yml). 
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
## Important

Indexer 3.1.0 uses Conduit for data loading. This is a change from the 2.x version, which managed data loading internally. See our [Using Conduit to Populate an Indexer Database](https://github.com/algorand/conduit/blob/master/docs/tutorials/IndexerWriter.md) tutorial for more information on how to use Conduit.

## Highlights

This is a maintenance release with a few small changes:
1. Version 3.0.0 was not properly reporting its version. This has been fixed.
2. The release artifacts now include the version in their filenames.

## Changelog

* 61f0d13 Initial commit of release (#1553) (#1556)
* 5ede011 Validator: check same round for retry (#1564)
* 66ca346 Merge branch 'v3' into develop
* 6b6be24 bug-fix: update module path and version (#1558)
* a6cd341 build: add version to release filename. (#1566)
* efe92f5 e2e: set algod version and default values (#1560)