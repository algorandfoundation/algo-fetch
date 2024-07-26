
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.2.0/api/indexer.oas3.yml). 
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

Indexer 3.1.0 uses Conduit for data loading. This is a change from the 2.x version, which managed data loading internally. See our [Using Conduit to Populate an Indexer Database](https://github.com/algorand/conduit/blob/master/docs/tutorials/IndexerWriter.md) tutorial for more information on how to use Conduit.

## Overview

This release adds a signature to the checksum file to help verify the integrity of a build.

1. Install the Algorand signing key from keys.openpgp.org or . Using GnuPG this is done with the following command:
    > gpg --keyserver keys.openpgp.org --search-keys dev-ci+build@algorand.com

2. Refresh keys if necessary. In the event of a security breech, we will revoke the key. To account for this, simply refresh the key:
    > gpg --keyserver keys.openpgp.org --refresh-keys

3. Download `checksums.txt.sig` and `checksums.txt` and verify the signature:
    > gpg --verify checksums.txt.sig checksums.txt

4. Download one or more release archives and verify the checksum:
    > sha256sum -c < checksums.txt

## Changelog
* 8f347f7 Add gpg signature to checksum file. (#1573)
* f3e54d6 Mention Conduit in DB open error message. (#1569)
* e47b81f Update goreleaser release notes. (#1568)
* d9c41d9 ci: fix release notes template formatting. (#1571)

**Full Changelog**: https://github.com/algorand/indexer/compare/v3.1.0...v3.2.0

---
[Docker images for this release are available on Docker Hub.](https://hub.docker.com/r/algorand/indexer)

