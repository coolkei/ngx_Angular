# Ngx Starter Kit

![Build Status](https://github.com/xmlking/ngx-starter-kit/workflows/Test%20on%20Push%20for%20WebApp/badge.svg?branch=develop)
![Build Status](https://github.com/xmlking/ngx-starter-kit/workflows/Test%20on%20Push%20for%20API/badge.svg?branch=develop)
[![Codecov](https://codecov.io/gh/xmlking/ngx-starter-kit/branch/develop/graph/badge.svg)](https://codecov.io/gh/xmlking/ngx-starter-kit)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate dependency Status](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

<!-- [![Sourcegraph](https://sourcegraph.com/github.com/xmlking/ngx-starter-kit/-/badge.svg)](https://sourcegraph.com/github.com/xmlking/ngx-starter-kit?badge) -->

## What you got

- [x] **Monorepo** sharing code between apps
- [x] **Jest** unit tests
- [x] **Cypress** e2e tests
- [x] [REST Client](apps/api/test-rest-api-vs-code.http) for API tests
- [x] Containerized builds
- [x] **Kubernetes** deployment
- [x] Conventional git commits
- [x] PR => CI quality checks => master
- [x] Code formatting via prettier, tslint
- [ ] Try [MikroORM](https://mikro-orm.io/)

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Angular CLI power-ups for modern development.**

live [Demo](https://xmlking.github.io/ngx-starter-kit/index.html)

If you are interested in smaller example project: [Mini-starter-kit](https://github.com/xmlking/connect4)

**PANTS** (:elephant: _PostgreSQL_ :a: _Angular_ :rocket: _NestJS_ :snowman: _TypeScript_) Stack in :dolphin: NX workspace

## Install

```bash
git clone https://github.com/xmlking/ngx-starter-kit.git my-project
cd my-project
yarn
```

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `yarn start:mock` for a mock server.

Run `yarn start -- --proxy-config proxy.conf.js` to start with proxy

## Build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `yarn test <module>` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).

## Docs

Run `yarn doc:build` to build docs.
Run `yarn doc:serve` to serve docs.

## Deploy

Run `yarn deploy:mock` to deploy demo app to gp-pages.

Analyzing bundle size `yarn bundle-report`

Analyzing and Visualizing the Dependency Graph (affected modules by uncommitted changes)

`yarn affected -- --target dep-graph --uncommitted`
