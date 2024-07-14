# algo-fetch
> Unofficial fetch wrapper for Algorand RPC

Please visit one of the official packages for integrating with Algorand:

- [algokit](https://developer.algorand.org/docs/get-started/algokit/)
- [algosdk](https://algorand.github.io/js-algorand-sdk/)
- [algo-models](https://github.com/algorandfoundation/algo-models) *wip*

# TLDR

This is a fetch wrapper for the Algorand RPC API. 
It is generated from the openapi schema provided by Algorand. 
It is intended to be used in the browser and in nodejs.

# Motivation

This demonstrates a way of working with RPC specifications with a clear separation of concerns.
Projects like algokit, algosdk and algo-models could benefit from this approach by sharing the same generated types and fetch clients.

This approach is already used in algosdk but only for the models, we purpose also exporting the interface from the operations
definition.

# Get Started[WIP]
```bash
npm install @algofam/algod-fetch
npm install @algofam/indexer-fetch
npm install @algofam/kmd-fetch
```

# Contributing[WIP]

Clone the project

```bash
git clone git@github.com:awesome-algorand/algo-fetch.git
```

Install the dependencies

```bash
npm install
```

## Commands

All projects share the same commands with the same intents

### dev

Runs vitest ui in development mode

```bash
npm run dev
```

### build

Builds project

```bash
npm run build
```

### test

Runs the tests

```bash
npm run test
```

### coverage

Creates a coverage report

```bash
npm run coverage
```

### lint

Runs the linter

```bash
npm run lint
```

# TODO:

- [ ] Automate the generation of the clients when the openapi schema changes, look into the action
- [ ] Add tests
