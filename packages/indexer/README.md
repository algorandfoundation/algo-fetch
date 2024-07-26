
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.0.0/api/indexer.oas3.yml). 
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
## Changelog
* d9e95a7 Add CODEOWNERS to protect workflows directories (#1520)
* c7c0e7f Add HOME/.local/bin to PATH for e2e tests (#1354)
* 3e3d479 Add auth addr to transaction response. (#1459)
* 1bbdd2b Add more log files on failure (#1458)
* f88a216 Add version flag to conduit root command. (#1377)
* 16a2bb3 Added retry variables for daemon run (#1380)
* ef6ecf1 Adding a link to the data directory documentation (#1287)
* 06ebb5a Adds strict unmarshalling (#1379)
* 7d7f31e Bug-Fix: pass failing `nightly_test_indexer_vs_algod` (#1364)
* 5851391 Build: Golang v20 upgrade for develop. (#1545)
* d8188a5 Bump github.com/prometheus/client_golang from 1.10.0 to 1.11.1 (#1467)
* 3528a6f Bump module path (#1552)
* 81721cd Conduit: Simplify and fix Conduit init. (#1369)
* c755f42 Conduit: use correct subsystem in plugin metrics. (#1378)
* be76440 Create CODE_OF_CONDUCT.md (#1534)
* 79f1b0e Docs: Improve Conduit documentation. (#1371)
* a751525 Enhancement: Update git submodule with go-algorand release commit `31a1099c` (#1304)
* d64577e Enhancement: add boxes to the indexer / algod validator (#1517)
* 25ab223 Enhancement: more logging in E2E tests + turn back on commit-workflow E2E test (#1523)
* ebacd84 FOR REVIEW ONLY: indexer 2.15.1 into develop (#1401)
* 314a2e1 FOR REVIEW ONLY: indexer 2.15.2 into develop (#1426)
* 9af98d3 Fix errors showing up w/ golanci-lint (#1358)
* c11881a Fix flaky test. (#1538)
* 92991d8 Fix genesis file parsing and error handling. (#1447)
* 66f035d Fix init template and allow plugins which have empty config. (#1376)
* 323ff96 Fix missing var initialize. (#1451)
* bff7ff4 Indexer: set starting round for indexer daemon (#1381)
* a8307c4 Initial commit of release
* 95658bc Merge branch 'release/2.14.2' into develop
* 5d956e5 Move eval package into blockprocessor. (#1367)
* 6670db3 New Feature: Add Retry Variables (#1370)
* 451d4b3 New Feature: Adds the sync mode importer  (#1415)
* be89f75 New Feature: Application Boxes in Indexer (#1168)
* 2d0bb8a Omit asset params from acfg delete txns (#1544)
* 34d18c6 REST API: Add compression to REST API (#1390)
* 9a98528 REST: add round information to box response (#1519)
* f16d927 Remove AccountTotals from metastate (#1417)
* caddb25 Run conduit-docs directly. (#1477)
* 07e454c Supported Disabled option (#1448)
* 95c34a2 Update go-algorand-sdk. (#1536)
* f2d4df2 Update submodule, e2e tests (#1388)
* fe96f24 Upgrade go SDK to v2. (#1423)
* 11396f1 Use LenientDecode for genesis objects from algod (#1389)
* cb9b83b add missing dep (#1496)
* 271de23 alerting: Slack `#lamprey-builds` Channel (#1524)
* d37f828 algod importer: Combines algod and algod_follower (#1452)
* e6f1c07 algod: Importer Plugin Update (#1478)
* 9e03fca api: Convert timezones before txn query (#1543)
* c462ef0 api: Remove go-algorand dep from api pkg (#1481)
* a592196 avm-abi: Switch from logic package to avm-abi library (#1409)
* 9f5806b bugfix: Reject empty genesis file. (#1436)
* 255db8f build: Fix lint/vet (#1445)
* 5d2b49b conduit: Add Conduit startup banner and fix default log level. (#1372)
* 003183a conduit: Default to plugin data directory when possible. (#1366)
* d672efe conduit: Initial conduit pipeline tool. (#1326)
* 9267008 conduit: Pass data dir to plugin config. (#1357)
* b2527f4 conduit: Remove conduit (#1505)
* bf12a7e conduit: Reorganize ahead of repo split. (#1489)
* b94e4f1 conduit: update plugin interface types (#1473)
* 158adb9 config: auto configuration generation with init command (#1474)
* ffcd97f daemon: Remove bp from indexer daemon (#1480)
* cb4581c e2e-test: E2e sync mode test (#1431)
* 68495ae e2e-tests: Add filtered indexer e2e tests (#1503)
* 922653f e2e-tests: Filter processor e2e test (#1493)
* 4245d7b encoding: Fix partupdrmv encoding. (#1530)
* 63bdb86 enhancement: more integration test refactoring (#1424)
* f56ae83 enhancement: refactor bookkeeping.genesis import  (#1385)
* 727c4a8 enhancement: refactor idb module (#1334)
* d6ae8c3 enhancement: refactor postgres integration tests (#1384)
* b39ad77 file-exporter: Use strict encoding when writing files. (#1488)
* fe5f2c6 filter-plugin: Inner Txn support. (#1487)
* 789fa06 filter-processor: Remove reflection (#1468)
* 1ed87ae filter-processor: move reflection into generated code (#1463)
* 668eb05 fix typo in oas file (#1512)
* cf0074c idb(postgres): add protocol version check before writing to database. (#1506)
* e4412d6 idb: update AddBlock method signature (#1465)
* f099cff importer: rewrite make integration  (#1485)
* 905c272 logging: Clean up conduit init logging. (#1497)
* 2805588 logging: Fix log-file configuration. (#1453)
* 06c2943 merge: 2.15.0 release changes (#1359)
* 15bea7e metrics: Configurable conduit metrics prefix. (#1353)
* 8b8d964 move block generator to another repo (#1429)
* ddcdc77 postgres: refactor idb writer (#1461)
* 7aa0c92 refactor: Remove blockprocessor, algorand-indexer import cmd (#1484)
* 146c4d3 refactoring: Move init command into a separate internal package. (#1498)
* 93f02f5 remove more go-algorand refs (#1491)
* 1784895 tech debt: Indexer initialization improvements (#1352)
* 208525d tech debt: Rename and simplify app log transactions query. (#1418)
* dd496ed tests: Add a way to pause the e2e docker container for debugging. (#1412)
* 052bd1f tests: Update e2e dockerfile (#1450)
* 762ff1d testutil: remove go-algorand reference (#1490)
* e8db83a update codeowners (#1527)
* 20b0502 update submodule (#1411)

