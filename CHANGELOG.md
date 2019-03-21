# [1.5.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.4.0...v1.5.0) (2019-03-21)


### Bug Fixes

* fix format:write -- --uncommitted ([27f5c8e](https://github.com/xmlking/ngx-starter-kit/commit/27f5c8e))
* **animations:** making hierarchical route animations default ([0f5c7c7](https://github.com/xmlking/ngx-starter-kit/commit/0f5c7c7))
* **api:** fix auth config ([ef1c8d4](https://github.com/xmlking/ngx-starter-kit/commit/ef1c8d4))
* **api:** make typeorm work with 'ng serve api' ([f561428](https://github.com/xmlking/ngx-starter-kit/commit/f561428))
* **api:** now properly setting some environment variables in process.env ([8d08135](https://github.com/xmlking/ngx-starter-kit/commit/8d08135))
* **api:** using timestamptz type for Dates in Entities ([e0760a7](https://github.com/xmlking/ngx-starter-kit/commit/e0760a7))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([89ba945](https://github.com/xmlking/ngx-starter-kit/commit/89ba945))
* **build:** now updating version ([1fa758b](https://github.com/xmlking/ngx-starter-kit/commit/1fa758b))
* **chat-box:** changed chat-box input style to outline ([69d326d](https://github.com/xmlking/ngx-starter-kit/commit/69d326d))
* **chat-box:** fix chatbox input appearance ([0c2bc18](https://github.com/xmlking/ngx-starter-kit/commit/0c2bc18))
* **chat-box:** fix voice box for safari ([df7260b](https://github.com/xmlking/ngx-starter-kit/commit/df7260b))
* **core:** adding es7/array polyfill to support old browsers ([048320d](https://github.com/xmlking/ngx-starter-kit/commit/048320d))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([25ec23a](https://github.com/xmlking/ngx-starter-kit/commit/25ec23a))
* **dependencies:** @ngxs/store v3.4.3 upgrade ([b6e9c13](https://github.com/xmlking/ngx-starter-kit/commit/b6e9c13))
* **dependencies:** removing more moment dependencies ([bf290bf](https://github.com/xmlking/ngx-starter-kit/commit/bf290bf))
* **dependencies:** removing more moment dependencies ([61426b2](https://github.com/xmlking/ngx-starter-kit/commit/61426b2))
* **dependencies:** updated dependencies ([b592827](https://github.com/xmlking/ngx-starter-kit/commit/b592827))
* **docs:** excluded some folders for compodoc builds ([9cc3ccb](https://github.com/xmlking/ngx-starter-kit/commit/9cc3ccb))
* **docs:** fix compodoc build ([442d112](https://github.com/xmlking/ngx-starter-kit/commit/442d112))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([8f14801](https://github.com/xmlking/ngx-starter-kit/commit/8f14801))
* **eventbus:** workaround for ngxs router plugin issue ([357e42c](https://github.com/xmlking/ngx-starter-kit/commit/357e42c))
* **eventbus:** workaround for ngxs router plugin issue ([600837e](https://github.com/xmlking/ngx-starter-kit/commit/600837e))
* **experiments:** update ngx-knob, lock d3 version ([854df6b](https://github.com/xmlking/ngx-starter-kit/commit/854df6b))
* **features:** using proper flex layout grid to render tiles ([96995a6](https://github.com/xmlking/ngx-starter-kit/commit/96995a6))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([78116e7](https://github.com/xmlking/ngx-starter-kit/commit/78116e7))
* **grid:** grid item hover animation changed ([f216deb](https://github.com/xmlking/ngx-starter-kit/commit/f216deb))
* **material:** mat-placeholde -> mat-label ([fe115e3](https://github.com/xmlking/ngx-starter-kit/commit/fe115e3))
* **nestjs:** fix typescript types ([9cc06aa](https://github.com/xmlking/ngx-starter-kit/commit/9cc06aa))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([83e9606](https://github.com/xmlking/ngx-starter-kit/commit/83e9606))
* **ngx-utils:** using  ngx-utils ([861c846](https://github.com/xmlking/ngx-starter-kit/commit/861c846))
* **notifications:** implement mock data for notifications PUT, POST actions ([cf8874a](https://github.com/xmlking/ngx-starter-kit/commit/cf8874a))
* **notifications:** polish notifications ([7c899a3](https://github.com/xmlking/ngx-starter-kit/commit/7c899a3))
* **notifications:** refactored notifications module ([04bf008](https://github.com/xmlking/ngx-starter-kit/commit/04bf008))
* **package:** update core-js to version 3.0.0 ([74a6d8e](https://github.com/xmlking/ngx-starter-kit/commit/74a6d8e))
* **schematics:** added Store workspace schematics ([29a7fbe](https://github.com/xmlking/ngx-starter-kit/commit/29a7fbe))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([ef34027](https://github.com/xmlking/ngx-starter-kit/commit/ef34027))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([2e0769a](https://github.com/xmlking/ngx-starter-kit/commit/2e0769a))
* **tools:** fix workspace-schematic ngxs ([72151a8](https://github.com/xmlking/ngx-starter-kit/commit/72151a8))
* @types/jasmine vs @types/jest conflict ([014b528](https://github.com/xmlking/ngx-starter-kit/commit/014b528))
* build ([c9b8c85](https://github.com/xmlking/ngx-starter-kit/commit/c9b8c85))
* build ([25f73b6](https://github.com/xmlking/ngx-starter-kit/commit/25f73b6))
* sticky header ([4b52da4](https://github.com/xmlking/ngx-starter-kit/commit/4b52da4))


### Features

* **admin:** adding admin module to manage notifications ([4b13ad2](https://github.com/xmlking/ngx-starter-kit/commit/4b13ad2))
* **admin:** adding admin module to manage notifications ([1c8a0fb](https://github.com/xmlking/ngx-starter-kit/commit/1c8a0fb))
* **analytics:** added google analytics service ([ece6711](https://github.com/xmlking/ngx-starter-kit/commit/ece6711))
* **animations:** added new hierarchical Route Animation ([0accc9e](https://github.com/xmlking/ngx-starter-kit/commit/0accc9e))
* **api:**  kubernetes ([2fba272](https://github.com/xmlking/ngx-starter-kit/commit/2fba272))
* **api:**  kubernetes ([7c49902](https://github.com/xmlking/ngx-starter-kit/commit/7c49902))
* **api:** added 2nd node-app 'backend' to showcase file upload ([43c861d](https://github.com/xmlking/ngx-starter-kit/commit/43c861d))
* **api:** added kubernetes api ([00f520b](https://github.com/xmlking/ngx-starter-kit/commit/00f520b))
* **api:** added push API module to save PushSubscriptions ([64d0d6c](https://github.com/xmlking/ngx-starter-kit/commit/64d0d6c))
* **api:** adding CacheModule ([04c5183](https://github.com/xmlking/ngx-starter-kit/commit/04c5183))
* **api:** adding profile sub-module ([45eeca0](https://github.com/xmlking/ngx-starter-kit/commit/45eeca0))
* **api:** dynamically load entities using webpack require.context ([c22e78b](https://github.com/xmlking/ngx-starter-kit/commit/c22e78b))
* **api:** list API now support Pagination and Search ([55e3e71](https://github.com/xmlking/ngx-starter-kit/commit/55e3e71))
* **api:** migrated database from mongodb to postgres ([af401cc](https://github.com/xmlking/ngx-starter-kit/commit/af401cc))
* **api:** polish,  refactored APIs ([98f3fa8](https://github.com/xmlking/ngx-starter-kit/commit/98f3fa8))
* **api:** polish,  refactored APIs ([c7340b3](https://github.com/xmlking/ngx-starter-kit/commit/c7340b3))
* **api:** refactored ConfigService ([73b7541](https://github.com/xmlking/ngx-starter-kit/commit/73b7541))
* **api:** upgrade NestJS to 6.0.0 ([8dbe9d9](https://github.com/xmlking/ngx-starter-kit/commit/8dbe9d9))
* **app:** Automatically set pageTitle from route data ([3679b2c](https://github.com/xmlking/ngx-starter-kit/commit/3679b2c))
* **auth:** Auth module now support CodeFlow/HybridFlow with PKCE ([e098bee](https://github.com/xmlking/ngx-starter-kit/commit/e098bee))
* **auth:** fix sso: removed initialNavigation ([429b448](https://github.com/xmlking/ngx-starter-kit/commit/429b448))
* **auth:** using  @xmlking/angular-oauth2-oidc-all ([63c6c07](https://github.com/xmlking/ngx-starter-kit/commit/63c6c07))
* **components:** added image comparison component ([c73a020](https://github.com/xmlking/ngx-starter-kit/commit/c73a020))
* **core:** lib modules published to NPM ([d5f7d4b](https://github.com/xmlking/ngx-starter-kit/commit/d5f7d4b))
* **core:** using Inject(WINDOW) and new ServiceWorker ([5062e92](https://github.com/xmlking/ngx-starter-kit/commit/5062e92))
* **core:** using ngx-quicklink preloading strategy ([9c113ac](https://github.com/xmlking/ngx-starter-kit/commit/9c113ac))
* **core:** using NGXS NgxsAfterBootstrap lifecycle hook ([db09fb2](https://github.com/xmlking/ngx-starter-kit/commit/db09fb2))
* **dashboard:** added profile and settings pages ([b1aae1b](https://github.com/xmlking/ngx-starter-kit/commit/b1aae1b))
* **dashboard:** added profile and settings pages ([5aaa29c](https://github.com/xmlking/ngx-starter-kit/commit/5aaa29c))
* **dashboard:** adding profile update feature with avatar (WIP) ([10e5f95](https://github.com/xmlking/ngx-starter-kit/commit/10e5f95))
* **dashing:** initial experiment to implement dashing.io ([e08f802](https://github.com/xmlking/ngx-starter-kit/commit/e08f802))
* **dashing:** initial experiment to implement dashing.io ([b306a4f](https://github.com/xmlking/ngx-starter-kit/commit/b306a4f))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([4b38ff1](https://github.com/xmlking/ngx-starter-kit/commit/4b38ff1))
* **deploy:** added k8s manifest files for API ([c68a363](https://github.com/xmlking/ngx-starter-kit/commit/c68a363))
* **deploy:** added k8s manifest files for API ([324d3c1](https://github.com/xmlking/ngx-starter-kit/commit/324d3c1))
* **deploy:** polish ngxapi Dockerfile. ([0ced24a](https://github.com/xmlking/ngx-starter-kit/commit/0ced24a))
* **deployment:** adding k8s deployment docs for postgres and keycloak ([49c4c75](https://github.com/xmlking/ngx-starter-kit/commit/49c4c75))
* **deps:** latest angular and nx ([0de5dda](https://github.com/xmlking/ngx-starter-kit/commit/0de5dda))
* **docs:** added FAQ for removing NgZone ([d09de4f](https://github.com/xmlking/ngx-starter-kit/commit/d09de4f))
* **docs:** added FAQ for removing NgZone ([5b096f4](https://github.com/xmlking/ngx-starter-kit/commit/5b096f4))
* **docs:** added FAQ for removing NgZone ([30c677d](https://github.com/xmlking/ngx-starter-kit/commit/30c677d))
* **docs:** added FAQ for removing NgZone ([dfc107b](https://github.com/xmlking/ngx-starter-kit/commit/dfc107b))
* **entity:** added column templates and sticky column options ([46abb0f](https://github.com/xmlking/ngx-starter-kit/commit/46abb0f))
* **experiments:** added new example to showcase flex-layout with grid ([dbc6a56](https://github.com/xmlking/ngx-starter-kit/commit/dbc6a56))
* **ngx-utils:** added mask directive ([36e7c8f](https://github.com/xmlking/ngx-starter-kit/commit/36e7c8f))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([bfac87e](https://github.com/xmlking/ngx-starter-kit/commit/bfac87e))
* **ngx-utils:** replaced Moment lib with date-fns ([c350a1b](https://github.com/xmlking/ngx-starter-kit/commit/c350a1b))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([8ae9100](https://github.com/xmlking/ngx-starter-kit/commit/8ae9100))
* **ngx-utils:** using new untilDestroy ([96b00d7](https://github.com/xmlking/ngx-starter-kit/commit/96b00d7))
* **notifications:** added field: native to  Notification model ([49c3056](https://github.com/xmlking/ngx-starter-kit/commit/49c3056))
* **notifications:** added notify, notifyAll API ([8189e5d](https://github.com/xmlking/ngx-starter-kit/commit/8189e5d))
* **notifications:** refactored notifications module ([2d85fd3](https://github.com/xmlking/ngx-starter-kit/commit/2d85fd3))
* **notifications:** UX changes to match API endpoint changes. ([f11bbd9](https://github.com/xmlking/ngx-starter-kit/commit/f11bbd9))
* **oidc:** adding native OIDC module (WIP) ([ca53594](https://github.com/xmlking/ngx-starter-kit/commit/ca53594))
* **oidc:** adding native OIDC module (WIP) ([cb4b044](https://github.com/xmlking/ngx-starter-kit/commit/cb4b044))
* **preload:** added Preload strategies module ([64fc759](https://github.com/xmlking/ngx-starter-kit/commit/64fc759))
* **preload:** added Preload strategies module ([a8a22f7](https://github.com/xmlking/ngx-starter-kit/commit/a8a22f7))
* **push:** PushNotifications subscription backend API ([7480338](https://github.com/xmlking/ngx-starter-kit/commit/7480338))
* **shared:** split shared module for optimal loading ([fd22e72](https://github.com/xmlking/ngx-starter-kit/commit/fd22e72))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b18c564](https://github.com/xmlking/ngx-starter-kit/commit/b18c564))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b3b0f93](https://github.com/xmlking/ngx-starter-kit/commit/b3b0f93))
* **viewport:** added new Viewport module ([d2f1a2e](https://github.com/xmlking/ngx-starter-kit/commit/d2f1a2e))
* **webapp-e2e:** switching from testcafe to cypress for e2e tests ([cfecbf8](https://github.com/xmlking/ngx-starter-kit/commit/cfecbf8))
* context-menu example ([c215c65](https://github.com/xmlking/ngx-starter-kit/commit/c215c65))


### Performance Improvements

* **core:** upgrade to es2018 ([e525738](https://github.com/xmlking/ngx-starter-kit/commit/e525738))
* **led:** using Attribute for data binding ([751c7a3](https://github.com/xmlking/ngx-starter-kit/commit/751c7a3))
* **login:** enhanced login UX ([9d6344a](https://github.com/xmlking/ngx-starter-kit/commit/9d6344a))
* **notifications:** using 'immer' to patch ngxs state ([53edd1d](https://github.com/xmlking/ngx-starter-kit/commit/53edd1d))
* **polish:** removed console.log ([2fe81b7](https://github.com/xmlking/ngx-starter-kit/commit/2fe81b7))


### Reverts

* **test:** test ([a662801](https://github.com/xmlking/ngx-starter-kit/commit/a662801))

# [1.5.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.4.0...v1.5.0) (2019-03-21)


### Bug Fixes

* fix format:write -- --uncommitted ([27f5c8e](https://github.com/xmlking/ngx-starter-kit/commit/27f5c8e))
* **animations:** making hierarchical route animations default ([0f5c7c7](https://github.com/xmlking/ngx-starter-kit/commit/0f5c7c7))
* **api:** fix auth config ([ef1c8d4](https://github.com/xmlking/ngx-starter-kit/commit/ef1c8d4))
* **api:** make typeorm work with 'ng serve api' ([f561428](https://github.com/xmlking/ngx-starter-kit/commit/f561428))
* **api:** now properly setting some environment variables in process.env ([8d08135](https://github.com/xmlking/ngx-starter-kit/commit/8d08135))
* **api:** using timestamptz type for Dates in Entities ([e0760a7](https://github.com/xmlking/ngx-starter-kit/commit/e0760a7))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([89ba945](https://github.com/xmlking/ngx-starter-kit/commit/89ba945))
* **build:** now updating version ([1fa758b](https://github.com/xmlking/ngx-starter-kit/commit/1fa758b))
* **chat-box:** changed chat-box input style to outline ([69d326d](https://github.com/xmlking/ngx-starter-kit/commit/69d326d))
* **chat-box:** fix chatbox input appearance ([0c2bc18](https://github.com/xmlking/ngx-starter-kit/commit/0c2bc18))
* **chat-box:** fix voice box for safari ([df7260b](https://github.com/xmlking/ngx-starter-kit/commit/df7260b))
* **core:** adding es7/array polyfill to support old browsers ([048320d](https://github.com/xmlking/ngx-starter-kit/commit/048320d))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([25ec23a](https://github.com/xmlking/ngx-starter-kit/commit/25ec23a))
* **dependencies:** @ngxs/store v3.4.3 upgrade ([b6e9c13](https://github.com/xmlking/ngx-starter-kit/commit/b6e9c13))
* **dependencies:** removing more moment dependencies ([bf290bf](https://github.com/xmlking/ngx-starter-kit/commit/bf290bf))
* **dependencies:** removing more moment dependencies ([61426b2](https://github.com/xmlking/ngx-starter-kit/commit/61426b2))
* **dependencies:** updated dependencies ([b592827](https://github.com/xmlking/ngx-starter-kit/commit/b592827))
* **docs:** excluded some folders for compodoc builds ([9cc3ccb](https://github.com/xmlking/ngx-starter-kit/commit/9cc3ccb))
* **docs:** fix compodoc build ([442d112](https://github.com/xmlking/ngx-starter-kit/commit/442d112))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([8f14801](https://github.com/xmlking/ngx-starter-kit/commit/8f14801))
* **eventbus:** workaround for ngxs router plugin issue ([357e42c](https://github.com/xmlking/ngx-starter-kit/commit/357e42c))
* **eventbus:** workaround for ngxs router plugin issue ([600837e](https://github.com/xmlking/ngx-starter-kit/commit/600837e))
* **experiments:** update ngx-knob, lock d3 version ([854df6b](https://github.com/xmlking/ngx-starter-kit/commit/854df6b))
* **features:** using proper flex layout grid to render tiles ([96995a6](https://github.com/xmlking/ngx-starter-kit/commit/96995a6))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([78116e7](https://github.com/xmlking/ngx-starter-kit/commit/78116e7))
* **grid:** grid item hover animation changed ([f216deb](https://github.com/xmlking/ngx-starter-kit/commit/f216deb))
* **material:** mat-placeholde -> mat-label ([fe115e3](https://github.com/xmlking/ngx-starter-kit/commit/fe115e3))
* **nestjs:** fix typescript types ([9cc06aa](https://github.com/xmlking/ngx-starter-kit/commit/9cc06aa))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([83e9606](https://github.com/xmlking/ngx-starter-kit/commit/83e9606))
* **ngx-utils:** using  ngx-utils ([861c846](https://github.com/xmlking/ngx-starter-kit/commit/861c846))
* **notifications:** implement mock data for notifications PUT, POST actions ([cf8874a](https://github.com/xmlking/ngx-starter-kit/commit/cf8874a))
* **notifications:** polish notifications ([7c899a3](https://github.com/xmlking/ngx-starter-kit/commit/7c899a3))
* **notifications:** refactored notifications module ([04bf008](https://github.com/xmlking/ngx-starter-kit/commit/04bf008))
* **package:** update core-js to version 3.0.0 ([74a6d8e](https://github.com/xmlking/ngx-starter-kit/commit/74a6d8e))
* **schematics:** added Store workspace schematics ([29a7fbe](https://github.com/xmlking/ngx-starter-kit/commit/29a7fbe))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([ef34027](https://github.com/xmlking/ngx-starter-kit/commit/ef34027))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([2e0769a](https://github.com/xmlking/ngx-starter-kit/commit/2e0769a))
* **tools:** fix workspace-schematic ngxs ([72151a8](https://github.com/xmlking/ngx-starter-kit/commit/72151a8))
* @types/jasmine vs @types/jest conflict ([014b528](https://github.com/xmlking/ngx-starter-kit/commit/014b528))
* build ([c9b8c85](https://github.com/xmlking/ngx-starter-kit/commit/c9b8c85))
* build ([25f73b6](https://github.com/xmlking/ngx-starter-kit/commit/25f73b6))
* sticky header ([4b52da4](https://github.com/xmlking/ngx-starter-kit/commit/4b52da4))


### Features

* **admin:** adding admin module to manage notifications ([4b13ad2](https://github.com/xmlking/ngx-starter-kit/commit/4b13ad2))
* **admin:** adding admin module to manage notifications ([1c8a0fb](https://github.com/xmlking/ngx-starter-kit/commit/1c8a0fb))
* **analytics:** added google analytics service ([ece6711](https://github.com/xmlking/ngx-starter-kit/commit/ece6711))
* **animations:** added new hierarchical Route Animation ([0accc9e](https://github.com/xmlking/ngx-starter-kit/commit/0accc9e))
* **api:**  kubernetes ([2fba272](https://github.com/xmlking/ngx-starter-kit/commit/2fba272))
* **api:**  kubernetes ([7c49902](https://github.com/xmlking/ngx-starter-kit/commit/7c49902))
* **api:** added 2nd node-app 'backend' to showcase file upload ([43c861d](https://github.com/xmlking/ngx-starter-kit/commit/43c861d))
* **api:** added kubernetes api ([00f520b](https://github.com/xmlking/ngx-starter-kit/commit/00f520b))
* **api:** added push API module to save PushSubscriptions ([64d0d6c](https://github.com/xmlking/ngx-starter-kit/commit/64d0d6c))
* **api:** adding CacheModule ([04c5183](https://github.com/xmlking/ngx-starter-kit/commit/04c5183))
* **api:** adding profile sub-module ([45eeca0](https://github.com/xmlking/ngx-starter-kit/commit/45eeca0))
* **api:** dynamically load entities using webpack require.context ([c22e78b](https://github.com/xmlking/ngx-starter-kit/commit/c22e78b))
* **api:** list API now support Pagination and Search ([55e3e71](https://github.com/xmlking/ngx-starter-kit/commit/55e3e71))
* **api:** migrated database from mongodb to postgres ([af401cc](https://github.com/xmlking/ngx-starter-kit/commit/af401cc))
* **api:** polish,  refactored APIs ([98f3fa8](https://github.com/xmlking/ngx-starter-kit/commit/98f3fa8))
* **api:** polish,  refactored APIs ([c7340b3](https://github.com/xmlking/ngx-starter-kit/commit/c7340b3))
* **api:** refactored ConfigService ([73b7541](https://github.com/xmlking/ngx-starter-kit/commit/73b7541))
* **api:** upgrade NestJS to 6.0.0 ([8dbe9d9](https://github.com/xmlking/ngx-starter-kit/commit/8dbe9d9))
* **app:** Automatically set pageTitle from route data ([3679b2c](https://github.com/xmlking/ngx-starter-kit/commit/3679b2c))
* **auth:** Auth module now support CodeFlow/HybridFlow with PKCE ([e098bee](https://github.com/xmlking/ngx-starter-kit/commit/e098bee))
* **auth:** fix sso: removed initialNavigation ([429b448](https://github.com/xmlking/ngx-starter-kit/commit/429b448))
* **auth:** using  @xmlking/angular-oauth2-oidc-all ([63c6c07](https://github.com/xmlking/ngx-starter-kit/commit/63c6c07))
* **components:** added image comparison component ([c73a020](https://github.com/xmlking/ngx-starter-kit/commit/c73a020))
* **core:** lib modules published to NPM ([d5f7d4b](https://github.com/xmlking/ngx-starter-kit/commit/d5f7d4b))
* **core:** using Inject(WINDOW) and new ServiceWorker ([5062e92](https://github.com/xmlking/ngx-starter-kit/commit/5062e92))
* **core:** using ngx-quicklink preloading strategy ([9c113ac](https://github.com/xmlking/ngx-starter-kit/commit/9c113ac))
* **core:** using NGXS NgxsAfterBootstrap lifecycle hook ([db09fb2](https://github.com/xmlking/ngx-starter-kit/commit/db09fb2))
* **dashboard:** added profile and settings pages ([b1aae1b](https://github.com/xmlking/ngx-starter-kit/commit/b1aae1b))
* **dashboard:** added profile and settings pages ([5aaa29c](https://github.com/xmlking/ngx-starter-kit/commit/5aaa29c))
* **dashboard:** adding profile update feature with avatar (WIP) ([10e5f95](https://github.com/xmlking/ngx-starter-kit/commit/10e5f95))
* **dashing:** initial experiment to implement dashing.io ([e08f802](https://github.com/xmlking/ngx-starter-kit/commit/e08f802))
* **dashing:** initial experiment to implement dashing.io ([b306a4f](https://github.com/xmlking/ngx-starter-kit/commit/b306a4f))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([4b38ff1](https://github.com/xmlking/ngx-starter-kit/commit/4b38ff1))
* **deploy:** added k8s manifest files for API ([c68a363](https://github.com/xmlking/ngx-starter-kit/commit/c68a363))
* **deploy:** added k8s manifest files for API ([324d3c1](https://github.com/xmlking/ngx-starter-kit/commit/324d3c1))
* **deploy:** polish ngxapi Dockerfile. ([0ced24a](https://github.com/xmlking/ngx-starter-kit/commit/0ced24a))
* **deployment:** adding k8s deployment docs for postgres and keycloak ([49c4c75](https://github.com/xmlking/ngx-starter-kit/commit/49c4c75))
* **deps:** latest angular and nx ([0de5dda](https://github.com/xmlking/ngx-starter-kit/commit/0de5dda))
* **docs:** added FAQ for removing NgZone ([d09de4f](https://github.com/xmlking/ngx-starter-kit/commit/d09de4f))
* **docs:** added FAQ for removing NgZone ([5b096f4](https://github.com/xmlking/ngx-starter-kit/commit/5b096f4))
* **docs:** added FAQ for removing NgZone ([30c677d](https://github.com/xmlking/ngx-starter-kit/commit/30c677d))
* **docs:** added FAQ for removing NgZone ([dfc107b](https://github.com/xmlking/ngx-starter-kit/commit/dfc107b))
* **entity:** added column templates and sticky column options ([46abb0f](https://github.com/xmlking/ngx-starter-kit/commit/46abb0f))
* **experiments:** added new example to showcase flex-layout with grid ([dbc6a56](https://github.com/xmlking/ngx-starter-kit/commit/dbc6a56))
* **ngx-utils:** added mask directive ([36e7c8f](https://github.com/xmlking/ngx-starter-kit/commit/36e7c8f))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([bfac87e](https://github.com/xmlking/ngx-starter-kit/commit/bfac87e))
* **ngx-utils:** replaced Moment lib with date-fns ([c350a1b](https://github.com/xmlking/ngx-starter-kit/commit/c350a1b))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([8ae9100](https://github.com/xmlking/ngx-starter-kit/commit/8ae9100))
* **ngx-utils:** using new untilDestroy ([96b00d7](https://github.com/xmlking/ngx-starter-kit/commit/96b00d7))
* **notifications:** added field: native to  Notification model ([49c3056](https://github.com/xmlking/ngx-starter-kit/commit/49c3056))
* **notifications:** added notify, notifyAll API ([8189e5d](https://github.com/xmlking/ngx-starter-kit/commit/8189e5d))
* **notifications:** refactored notifications module ([2d85fd3](https://github.com/xmlking/ngx-starter-kit/commit/2d85fd3))
* **notifications:** UX changes to match API endpoint changes. ([f11bbd9](https://github.com/xmlking/ngx-starter-kit/commit/f11bbd9))
* **oidc:** adding native OIDC module (WIP) ([ca53594](https://github.com/xmlking/ngx-starter-kit/commit/ca53594))
* **oidc:** adding native OIDC module (WIP) ([cb4b044](https://github.com/xmlking/ngx-starter-kit/commit/cb4b044))
* **preload:** added Preload strategies module ([64fc759](https://github.com/xmlking/ngx-starter-kit/commit/64fc759))
* **preload:** added Preload strategies module ([a8a22f7](https://github.com/xmlking/ngx-starter-kit/commit/a8a22f7))
* **push:** PushNotifications subscription backend API ([7480338](https://github.com/xmlking/ngx-starter-kit/commit/7480338))
* **shared:** split shared module for optimal loading ([fd22e72](https://github.com/xmlking/ngx-starter-kit/commit/fd22e72))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b18c564](https://github.com/xmlking/ngx-starter-kit/commit/b18c564))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b3b0f93](https://github.com/xmlking/ngx-starter-kit/commit/b3b0f93))
* **viewport:** added new Viewport module ([d2f1a2e](https://github.com/xmlking/ngx-starter-kit/commit/d2f1a2e))
* **webapp-e2e:** switching from testcafe to cypress for e2e tests ([cfecbf8](https://github.com/xmlking/ngx-starter-kit/commit/cfecbf8))
* context-menu example ([c215c65](https://github.com/xmlking/ngx-starter-kit/commit/c215c65))


### Performance Improvements

* **core:** upgrade to es2018 ([e525738](https://github.com/xmlking/ngx-starter-kit/commit/e525738))
* **led:** using Attribute for data binding ([751c7a3](https://github.com/xmlking/ngx-starter-kit/commit/751c7a3))
* **login:** enhanced login UX ([9d6344a](https://github.com/xmlking/ngx-starter-kit/commit/9d6344a))
* **notifications:** using 'immer' to patch ngxs state ([53edd1d](https://github.com/xmlking/ngx-starter-kit/commit/53edd1d))
* **polish:** removed console.log ([2fe81b7](https://github.com/xmlking/ngx-starter-kit/commit/2fe81b7))


### Reverts

* **test:** test ([a662801](https://github.com/xmlking/ngx-starter-kit/commit/a662801))

# [1.5.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.4.0...v1.5.0) (2019-03-21)


### Bug Fixes

* fix format:write -- --uncommitted ([27f5c8e](https://github.com/xmlking/ngx-starter-kit/commit/27f5c8e))
* **animations:** making hierarchical route animations default ([0f5c7c7](https://github.com/xmlking/ngx-starter-kit/commit/0f5c7c7))
* **api:** fix auth config ([ef1c8d4](https://github.com/xmlking/ngx-starter-kit/commit/ef1c8d4))
* **api:** make typeorm work with 'ng serve api' ([f561428](https://github.com/xmlking/ngx-starter-kit/commit/f561428))
* **api:** now properly setting some environment variables in process.env ([8d08135](https://github.com/xmlking/ngx-starter-kit/commit/8d08135))
* **api:** using timestamptz type for Dates in Entities ([e0760a7](https://github.com/xmlking/ngx-starter-kit/commit/e0760a7))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([89ba945](https://github.com/xmlking/ngx-starter-kit/commit/89ba945))
* **build:** now updating version ([1fa758b](https://github.com/xmlking/ngx-starter-kit/commit/1fa758b))
* **chat-box:** changed chat-box input style to outline ([69d326d](https://github.com/xmlking/ngx-starter-kit/commit/69d326d))
* **chat-box:** fix chatbox input appearance ([0c2bc18](https://github.com/xmlking/ngx-starter-kit/commit/0c2bc18))
* **chat-box:** fix voice box for safari ([df7260b](https://github.com/xmlking/ngx-starter-kit/commit/df7260b))
* **core:** adding es7/array polyfill to support old browsers ([048320d](https://github.com/xmlking/ngx-starter-kit/commit/048320d))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([25ec23a](https://github.com/xmlking/ngx-starter-kit/commit/25ec23a))
* **dependencies:** @ngxs/store v3.4.3 upgrade ([b6e9c13](https://github.com/xmlking/ngx-starter-kit/commit/b6e9c13))
* **dependencies:** removing more moment dependencies ([bf290bf](https://github.com/xmlking/ngx-starter-kit/commit/bf290bf))
* **dependencies:** removing more moment dependencies ([61426b2](https://github.com/xmlking/ngx-starter-kit/commit/61426b2))
* **dependencies:** updated dependencies ([b592827](https://github.com/xmlking/ngx-starter-kit/commit/b592827))
* **docs:** excluded some folders for compodoc builds ([9cc3ccb](https://github.com/xmlking/ngx-starter-kit/commit/9cc3ccb))
* **docs:** fix compodoc build ([442d112](https://github.com/xmlking/ngx-starter-kit/commit/442d112))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([8f14801](https://github.com/xmlking/ngx-starter-kit/commit/8f14801))
* **eventbus:** workaround for ngxs router plugin issue ([357e42c](https://github.com/xmlking/ngx-starter-kit/commit/357e42c))
* **eventbus:** workaround for ngxs router plugin issue ([600837e](https://github.com/xmlking/ngx-starter-kit/commit/600837e))
* **experiments:** update ngx-knob, lock d3 version ([854df6b](https://github.com/xmlking/ngx-starter-kit/commit/854df6b))
* **features:** using proper flex layout grid to render tiles ([96995a6](https://github.com/xmlking/ngx-starter-kit/commit/96995a6))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([78116e7](https://github.com/xmlking/ngx-starter-kit/commit/78116e7))
* **grid:** grid item hover animation changed ([f216deb](https://github.com/xmlking/ngx-starter-kit/commit/f216deb))
* **material:** mat-placeholde -> mat-label ([fe115e3](https://github.com/xmlking/ngx-starter-kit/commit/fe115e3))
* **nestjs:** fix typescript types ([9cc06aa](https://github.com/xmlking/ngx-starter-kit/commit/9cc06aa))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([83e9606](https://github.com/xmlking/ngx-starter-kit/commit/83e9606))
* **ngx-utils:** using  ngx-utils ([861c846](https://github.com/xmlking/ngx-starter-kit/commit/861c846))
* **notifications:** implement mock data for notifications PUT, POST actions ([cf8874a](https://github.com/xmlking/ngx-starter-kit/commit/cf8874a))
* **notifications:** polish notifications ([7c899a3](https://github.com/xmlking/ngx-starter-kit/commit/7c899a3))
* **notifications:** refactored notifications module ([04bf008](https://github.com/xmlking/ngx-starter-kit/commit/04bf008))
* **package:** update core-js to version 3.0.0 ([74a6d8e](https://github.com/xmlking/ngx-starter-kit/commit/74a6d8e))
* **schematics:** added Store workspace schematics ([29a7fbe](https://github.com/xmlking/ngx-starter-kit/commit/29a7fbe))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([ef34027](https://github.com/xmlking/ngx-starter-kit/commit/ef34027))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([2e0769a](https://github.com/xmlking/ngx-starter-kit/commit/2e0769a))
* **tools:** fix workspace-schematic ngxs ([72151a8](https://github.com/xmlking/ngx-starter-kit/commit/72151a8))
* @types/jasmine vs @types/jest conflict ([014b528](https://github.com/xmlking/ngx-starter-kit/commit/014b528))
* build ([c9b8c85](https://github.com/xmlking/ngx-starter-kit/commit/c9b8c85))
* build ([25f73b6](https://github.com/xmlking/ngx-starter-kit/commit/25f73b6))
* sticky header ([4b52da4](https://github.com/xmlking/ngx-starter-kit/commit/4b52da4))


### Features

* **admin:** adding admin module to manage notifications ([4b13ad2](https://github.com/xmlking/ngx-starter-kit/commit/4b13ad2))
* **admin:** adding admin module to manage notifications ([1c8a0fb](https://github.com/xmlking/ngx-starter-kit/commit/1c8a0fb))
* **analytics:** added google analytics service ([ece6711](https://github.com/xmlking/ngx-starter-kit/commit/ece6711))
* **animations:** added new hierarchical Route Animation ([0accc9e](https://github.com/xmlking/ngx-starter-kit/commit/0accc9e))
* **api:**  kubernetes ([2fba272](https://github.com/xmlking/ngx-starter-kit/commit/2fba272))
* **api:**  kubernetes ([7c49902](https://github.com/xmlking/ngx-starter-kit/commit/7c49902))
* **api:** added 2nd node-app 'backend' to showcase file upload ([43c861d](https://github.com/xmlking/ngx-starter-kit/commit/43c861d))
* **api:** added kubernetes api ([00f520b](https://github.com/xmlking/ngx-starter-kit/commit/00f520b))
* **api:** added push API module to save PushSubscriptions ([64d0d6c](https://github.com/xmlking/ngx-starter-kit/commit/64d0d6c))
* **api:** adding CacheModule ([04c5183](https://github.com/xmlking/ngx-starter-kit/commit/04c5183))
* **api:** adding profile sub-module ([45eeca0](https://github.com/xmlking/ngx-starter-kit/commit/45eeca0))
* **api:** dynamically load entities using webpack require.context ([c22e78b](https://github.com/xmlking/ngx-starter-kit/commit/c22e78b))
* **api:** list API now support Pagination and Search ([55e3e71](https://github.com/xmlking/ngx-starter-kit/commit/55e3e71))
* **api:** migrated database from mongodb to postgres ([af401cc](https://github.com/xmlking/ngx-starter-kit/commit/af401cc))
* **api:** polish,  refactored APIs ([98f3fa8](https://github.com/xmlking/ngx-starter-kit/commit/98f3fa8))
* **api:** polish,  refactored APIs ([c7340b3](https://github.com/xmlking/ngx-starter-kit/commit/c7340b3))
* **api:** refactored ConfigService ([73b7541](https://github.com/xmlking/ngx-starter-kit/commit/73b7541))
* **api:** upgrade NestJS to 6.0.0 ([8dbe9d9](https://github.com/xmlking/ngx-starter-kit/commit/8dbe9d9))
* **app:** Automatically set pageTitle from route data ([3679b2c](https://github.com/xmlking/ngx-starter-kit/commit/3679b2c))
* **auth:** Auth module now support CodeFlow/HybridFlow with PKCE ([e098bee](https://github.com/xmlking/ngx-starter-kit/commit/e098bee))
* **auth:** fix sso: removed initialNavigation ([429b448](https://github.com/xmlking/ngx-starter-kit/commit/429b448))
* **auth:** using  @xmlking/angular-oauth2-oidc-all ([63c6c07](https://github.com/xmlking/ngx-starter-kit/commit/63c6c07))
* **components:** added image comparison component ([c73a020](https://github.com/xmlking/ngx-starter-kit/commit/c73a020))
* **core:** lib modules published to NPM ([d5f7d4b](https://github.com/xmlking/ngx-starter-kit/commit/d5f7d4b))
* **core:** using Inject(WINDOW) and new ServiceWorker ([5062e92](https://github.com/xmlking/ngx-starter-kit/commit/5062e92))
* **core:** using ngx-quicklink preloading strategy ([9c113ac](https://github.com/xmlking/ngx-starter-kit/commit/9c113ac))
* **core:** using NGXS NgxsAfterBootstrap lifecycle hook ([db09fb2](https://github.com/xmlking/ngx-starter-kit/commit/db09fb2))
* **dashboard:** added profile and settings pages ([b1aae1b](https://github.com/xmlking/ngx-starter-kit/commit/b1aae1b))
* **dashboard:** added profile and settings pages ([5aaa29c](https://github.com/xmlking/ngx-starter-kit/commit/5aaa29c))
* **dashboard:** adding profile update feature with avatar (WIP) ([10e5f95](https://github.com/xmlking/ngx-starter-kit/commit/10e5f95))
* **dashing:** initial experiment to implement dashing.io ([e08f802](https://github.com/xmlking/ngx-starter-kit/commit/e08f802))
* **dashing:** initial experiment to implement dashing.io ([b306a4f](https://github.com/xmlking/ngx-starter-kit/commit/b306a4f))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([4b38ff1](https://github.com/xmlking/ngx-starter-kit/commit/4b38ff1))
* **deploy:** added k8s manifest files for API ([c68a363](https://github.com/xmlking/ngx-starter-kit/commit/c68a363))
* **deploy:** added k8s manifest files for API ([324d3c1](https://github.com/xmlking/ngx-starter-kit/commit/324d3c1))
* **deploy:** polish ngxapi Dockerfile. ([0ced24a](https://github.com/xmlking/ngx-starter-kit/commit/0ced24a))
* **deployment:** adding k8s deployment docs for postgres and keycloak ([49c4c75](https://github.com/xmlking/ngx-starter-kit/commit/49c4c75))
* **deps:** latest angular and nx ([0de5dda](https://github.com/xmlking/ngx-starter-kit/commit/0de5dda))
* **docs:** added FAQ for removing NgZone ([d09de4f](https://github.com/xmlking/ngx-starter-kit/commit/d09de4f))
* **docs:** added FAQ for removing NgZone ([5b096f4](https://github.com/xmlking/ngx-starter-kit/commit/5b096f4))
* **docs:** added FAQ for removing NgZone ([30c677d](https://github.com/xmlking/ngx-starter-kit/commit/30c677d))
* **docs:** added FAQ for removing NgZone ([dfc107b](https://github.com/xmlking/ngx-starter-kit/commit/dfc107b))
* **entity:** added column templates and sticky column options ([46abb0f](https://github.com/xmlking/ngx-starter-kit/commit/46abb0f))
* **experiments:** added new example to showcase flex-layout with grid ([dbc6a56](https://github.com/xmlking/ngx-starter-kit/commit/dbc6a56))
* **ngx-utils:** added mask directive ([36e7c8f](https://github.com/xmlking/ngx-starter-kit/commit/36e7c8f))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([bfac87e](https://github.com/xmlking/ngx-starter-kit/commit/bfac87e))
* **ngx-utils:** replaced Moment lib with date-fns ([c350a1b](https://github.com/xmlking/ngx-starter-kit/commit/c350a1b))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([8ae9100](https://github.com/xmlking/ngx-starter-kit/commit/8ae9100))
* **ngx-utils:** using new untilDestroy ([96b00d7](https://github.com/xmlking/ngx-starter-kit/commit/96b00d7))
* **notifications:** added field: native to  Notification model ([49c3056](https://github.com/xmlking/ngx-starter-kit/commit/49c3056))
* **notifications:** added notify, notifyAll API ([8189e5d](https://github.com/xmlking/ngx-starter-kit/commit/8189e5d))
* **notifications:** refactored notifications module ([2d85fd3](https://github.com/xmlking/ngx-starter-kit/commit/2d85fd3))
* **notifications:** UX changes to match API endpoint changes. ([f11bbd9](https://github.com/xmlking/ngx-starter-kit/commit/f11bbd9))
* **oidc:** adding native OIDC module (WIP) ([ca53594](https://github.com/xmlking/ngx-starter-kit/commit/ca53594))
* **oidc:** adding native OIDC module (WIP) ([cb4b044](https://github.com/xmlking/ngx-starter-kit/commit/cb4b044))
* **preload:** added Preload strategies module ([64fc759](https://github.com/xmlking/ngx-starter-kit/commit/64fc759))
* **preload:** added Preload strategies module ([a8a22f7](https://github.com/xmlking/ngx-starter-kit/commit/a8a22f7))
* **push:** PushNotifications subscription backend API ([7480338](https://github.com/xmlking/ngx-starter-kit/commit/7480338))
* **shared:** split shared module for optimal loading ([fd22e72](https://github.com/xmlking/ngx-starter-kit/commit/fd22e72))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b18c564](https://github.com/xmlking/ngx-starter-kit/commit/b18c564))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b3b0f93](https://github.com/xmlking/ngx-starter-kit/commit/b3b0f93))
* **viewport:** added new Viewport module ([d2f1a2e](https://github.com/xmlking/ngx-starter-kit/commit/d2f1a2e))
* **webapp-e2e:** switching from testcafe to cypress for e2e tests ([cfecbf8](https://github.com/xmlking/ngx-starter-kit/commit/cfecbf8))
* context-menu example ([c215c65](https://github.com/xmlking/ngx-starter-kit/commit/c215c65))


### Performance Improvements

* **core:** upgrade to es2018 ([e525738](https://github.com/xmlking/ngx-starter-kit/commit/e525738))
* **led:** using Attribute for data binding ([751c7a3](https://github.com/xmlking/ngx-starter-kit/commit/751c7a3))
* **login:** enhanced login UX ([9d6344a](https://github.com/xmlking/ngx-starter-kit/commit/9d6344a))
* **notifications:** using 'immer' to patch ngxs state ([53edd1d](https://github.com/xmlking/ngx-starter-kit/commit/53edd1d))
* **polish:** removed console.log ([2fe81b7](https://github.com/xmlking/ngx-starter-kit/commit/2fe81b7))


### Reverts

* **test:** test ([a662801](https://github.com/xmlking/ngx-starter-kit/commit/a662801))

# [1.5.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.4.0...v1.5.0) (2019-03-21)


### Bug Fixes

* fix format:write -- --uncommitted ([27f5c8e](https://github.com/xmlking/ngx-starter-kit/commit/27f5c8e))
* **animations:** making hierarchical route animations default ([0f5c7c7](https://github.com/xmlking/ngx-starter-kit/commit/0f5c7c7))
* **api:** fix auth config ([ef1c8d4](https://github.com/xmlking/ngx-starter-kit/commit/ef1c8d4))
* **api:** make typeorm work with 'ng serve api' ([f561428](https://github.com/xmlking/ngx-starter-kit/commit/f561428))
* **api:** now properly setting some environment variables in process.env ([8d08135](https://github.com/xmlking/ngx-starter-kit/commit/8d08135))
* **api:** using timestamptz type for Dates in Entities ([e0760a7](https://github.com/xmlking/ngx-starter-kit/commit/e0760a7))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([89ba945](https://github.com/xmlking/ngx-starter-kit/commit/89ba945))
* **build:** now updating version ([1fa758b](https://github.com/xmlking/ngx-starter-kit/commit/1fa758b))
* **chat-box:** changed chat-box input style to outline ([69d326d](https://github.com/xmlking/ngx-starter-kit/commit/69d326d))
* **chat-box:** fix chatbox input appearance ([0c2bc18](https://github.com/xmlking/ngx-starter-kit/commit/0c2bc18))
* **chat-box:** fix voice box for safari ([df7260b](https://github.com/xmlking/ngx-starter-kit/commit/df7260b))
* **core:** adding es7/array polyfill to support old browsers ([048320d](https://github.com/xmlking/ngx-starter-kit/commit/048320d))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([25ec23a](https://github.com/xmlking/ngx-starter-kit/commit/25ec23a))
* **dependencies:** @ngxs/store v3.4.3 upgrade ([b6e9c13](https://github.com/xmlking/ngx-starter-kit/commit/b6e9c13))
* **dependencies:** removing more moment dependencies ([bf290bf](https://github.com/xmlking/ngx-starter-kit/commit/bf290bf))
* **dependencies:** removing more moment dependencies ([61426b2](https://github.com/xmlking/ngx-starter-kit/commit/61426b2))
* **dependencies:** updated dependencies ([b592827](https://github.com/xmlking/ngx-starter-kit/commit/b592827))
* **docs:** excluded some folders for compodoc builds ([9cc3ccb](https://github.com/xmlking/ngx-starter-kit/commit/9cc3ccb))
* **docs:** fix compodoc build ([442d112](https://github.com/xmlking/ngx-starter-kit/commit/442d112))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([8f14801](https://github.com/xmlking/ngx-starter-kit/commit/8f14801))
* **eventbus:** workaround for ngxs router plugin issue ([357e42c](https://github.com/xmlking/ngx-starter-kit/commit/357e42c))
* **eventbus:** workaround for ngxs router plugin issue ([600837e](https://github.com/xmlking/ngx-starter-kit/commit/600837e))
* **experiments:** update ngx-knob, lock d3 version ([854df6b](https://github.com/xmlking/ngx-starter-kit/commit/854df6b))
* **features:** using proper flex layout grid to render tiles ([96995a6](https://github.com/xmlking/ngx-starter-kit/commit/96995a6))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([78116e7](https://github.com/xmlking/ngx-starter-kit/commit/78116e7))
* **grid:** grid item hover animation changed ([f216deb](https://github.com/xmlking/ngx-starter-kit/commit/f216deb))
* **material:** mat-placeholde -> mat-label ([fe115e3](https://github.com/xmlking/ngx-starter-kit/commit/fe115e3))
* **nestjs:** fix typescript types ([9cc06aa](https://github.com/xmlking/ngx-starter-kit/commit/9cc06aa))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([83e9606](https://github.com/xmlking/ngx-starter-kit/commit/83e9606))
* **ngx-utils:** using  ngx-utils ([861c846](https://github.com/xmlking/ngx-starter-kit/commit/861c846))
* **notifications:** implement mock data for notifications PUT, POST actions ([cf8874a](https://github.com/xmlking/ngx-starter-kit/commit/cf8874a))
* **notifications:** polish notifications ([7c899a3](https://github.com/xmlking/ngx-starter-kit/commit/7c899a3))
* **notifications:** refactored notifications module ([04bf008](https://github.com/xmlking/ngx-starter-kit/commit/04bf008))
* **package:** update core-js to version 3.0.0 ([74a6d8e](https://github.com/xmlking/ngx-starter-kit/commit/74a6d8e))
* **schematics:** added Store workspace schematics ([29a7fbe](https://github.com/xmlking/ngx-starter-kit/commit/29a7fbe))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([ef34027](https://github.com/xmlking/ngx-starter-kit/commit/ef34027))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([2e0769a](https://github.com/xmlking/ngx-starter-kit/commit/2e0769a))
* **tools:** fix workspace-schematic ngxs ([72151a8](https://github.com/xmlking/ngx-starter-kit/commit/72151a8))
* @types/jasmine vs @types/jest conflict ([014b528](https://github.com/xmlking/ngx-starter-kit/commit/014b528))
* build ([c9b8c85](https://github.com/xmlking/ngx-starter-kit/commit/c9b8c85))
* build ([25f73b6](https://github.com/xmlking/ngx-starter-kit/commit/25f73b6))
* sticky header ([4b52da4](https://github.com/xmlking/ngx-starter-kit/commit/4b52da4))


### Features

* **admin:** adding admin module to manage notifications ([4b13ad2](https://github.com/xmlking/ngx-starter-kit/commit/4b13ad2))
* **admin:** adding admin module to manage notifications ([1c8a0fb](https://github.com/xmlking/ngx-starter-kit/commit/1c8a0fb))
* **analytics:** added google analytics service ([ece6711](https://github.com/xmlking/ngx-starter-kit/commit/ece6711))
* **animations:** added new hierarchical Route Animation ([0accc9e](https://github.com/xmlking/ngx-starter-kit/commit/0accc9e))
* **api:**  kubernetes ([2fba272](https://github.com/xmlking/ngx-starter-kit/commit/2fba272))
* **api:**  kubernetes ([7c49902](https://github.com/xmlking/ngx-starter-kit/commit/7c49902))
* **api:** added 2nd node-app 'backend' to showcase file upload ([43c861d](https://github.com/xmlking/ngx-starter-kit/commit/43c861d))
* **api:** added kubernetes api ([00f520b](https://github.com/xmlking/ngx-starter-kit/commit/00f520b))
* **api:** added push API module to save PushSubscriptions ([64d0d6c](https://github.com/xmlking/ngx-starter-kit/commit/64d0d6c))
* **api:** adding CacheModule ([04c5183](https://github.com/xmlking/ngx-starter-kit/commit/04c5183))
* **api:** adding profile sub-module ([45eeca0](https://github.com/xmlking/ngx-starter-kit/commit/45eeca0))
* **api:** dynamically load entities using webpack require.context ([c22e78b](https://github.com/xmlking/ngx-starter-kit/commit/c22e78b))
* **api:** list API now support Pagination and Search ([55e3e71](https://github.com/xmlking/ngx-starter-kit/commit/55e3e71))
* **api:** migrated database from mongodb to postgres ([af401cc](https://github.com/xmlking/ngx-starter-kit/commit/af401cc))
* **api:** polish,  refactored APIs ([98f3fa8](https://github.com/xmlking/ngx-starter-kit/commit/98f3fa8))
* **api:** polish,  refactored APIs ([c7340b3](https://github.com/xmlking/ngx-starter-kit/commit/c7340b3))
* **api:** refactored ConfigService ([73b7541](https://github.com/xmlking/ngx-starter-kit/commit/73b7541))
* **api:** upgrade NestJS to 6.0.0 ([8dbe9d9](https://github.com/xmlking/ngx-starter-kit/commit/8dbe9d9))
* **app:** Automatically set pageTitle from route data ([3679b2c](https://github.com/xmlking/ngx-starter-kit/commit/3679b2c))
* **auth:** Auth module now support CodeFlow/HybridFlow with PKCE ([e098bee](https://github.com/xmlking/ngx-starter-kit/commit/e098bee))
* **auth:** fix sso: removed initialNavigation ([429b448](https://github.com/xmlking/ngx-starter-kit/commit/429b448))
* **auth:** using  @xmlking/angular-oauth2-oidc-all ([63c6c07](https://github.com/xmlking/ngx-starter-kit/commit/63c6c07))
* **components:** added image comparison component ([c73a020](https://github.com/xmlking/ngx-starter-kit/commit/c73a020))
* **core:** lib modules published to NPM ([d5f7d4b](https://github.com/xmlking/ngx-starter-kit/commit/d5f7d4b))
* **core:** using Inject(WINDOW) and new ServiceWorker ([5062e92](https://github.com/xmlking/ngx-starter-kit/commit/5062e92))
* **core:** using ngx-quicklink preloading strategy ([9c113ac](https://github.com/xmlking/ngx-starter-kit/commit/9c113ac))
* **core:** using NGXS NgxsAfterBootstrap lifecycle hook ([db09fb2](https://github.com/xmlking/ngx-starter-kit/commit/db09fb2))
* **dashboard:** added profile and settings pages ([b1aae1b](https://github.com/xmlking/ngx-starter-kit/commit/b1aae1b))
* **dashboard:** added profile and settings pages ([5aaa29c](https://github.com/xmlking/ngx-starter-kit/commit/5aaa29c))
* **dashboard:** adding profile update feature with avatar (WIP) ([10e5f95](https://github.com/xmlking/ngx-starter-kit/commit/10e5f95))
* **dashing:** initial experiment to implement dashing.io ([e08f802](https://github.com/xmlking/ngx-starter-kit/commit/e08f802))
* **dashing:** initial experiment to implement dashing.io ([b306a4f](https://github.com/xmlking/ngx-starter-kit/commit/b306a4f))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([4b38ff1](https://github.com/xmlking/ngx-starter-kit/commit/4b38ff1))
* **deploy:** added k8s manifest files for API ([c68a363](https://github.com/xmlking/ngx-starter-kit/commit/c68a363))
* **deploy:** added k8s manifest files for API ([324d3c1](https://github.com/xmlking/ngx-starter-kit/commit/324d3c1))
* **deploy:** polish ngxapi Dockerfile. ([0ced24a](https://github.com/xmlking/ngx-starter-kit/commit/0ced24a))
* **deployment:** adding k8s deployment docs for postgres and keycloak ([49c4c75](https://github.com/xmlking/ngx-starter-kit/commit/49c4c75))
* **deps:** latest angular and nx ([0de5dda](https://github.com/xmlking/ngx-starter-kit/commit/0de5dda))
* **docs:** added FAQ for removing NgZone ([d09de4f](https://github.com/xmlking/ngx-starter-kit/commit/d09de4f))
* **docs:** added FAQ for removing NgZone ([5b096f4](https://github.com/xmlking/ngx-starter-kit/commit/5b096f4))
* **docs:** added FAQ for removing NgZone ([30c677d](https://github.com/xmlking/ngx-starter-kit/commit/30c677d))
* **docs:** added FAQ for removing NgZone ([dfc107b](https://github.com/xmlking/ngx-starter-kit/commit/dfc107b))
* **entity:** added column templates and sticky column options ([46abb0f](https://github.com/xmlking/ngx-starter-kit/commit/46abb0f))
* **experiments:** added new example to showcase flex-layout with grid ([dbc6a56](https://github.com/xmlking/ngx-starter-kit/commit/dbc6a56))
* **ngx-utils:** added mask directive ([36e7c8f](https://github.com/xmlking/ngx-starter-kit/commit/36e7c8f))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([bfac87e](https://github.com/xmlking/ngx-starter-kit/commit/bfac87e))
* **ngx-utils:** replaced Moment lib with date-fns ([c350a1b](https://github.com/xmlking/ngx-starter-kit/commit/c350a1b))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([8ae9100](https://github.com/xmlking/ngx-starter-kit/commit/8ae9100))
* **ngx-utils:** using new untilDestroy ([96b00d7](https://github.com/xmlking/ngx-starter-kit/commit/96b00d7))
* **notifications:** added field: native to  Notification model ([49c3056](https://github.com/xmlking/ngx-starter-kit/commit/49c3056))
* **notifications:** added notify, notifyAll API ([8189e5d](https://github.com/xmlking/ngx-starter-kit/commit/8189e5d))
* **notifications:** refactored notifications module ([2d85fd3](https://github.com/xmlking/ngx-starter-kit/commit/2d85fd3))
* **notifications:** UX changes to match API endpoint changes. ([f11bbd9](https://github.com/xmlking/ngx-starter-kit/commit/f11bbd9))
* **oidc:** adding native OIDC module (WIP) ([ca53594](https://github.com/xmlking/ngx-starter-kit/commit/ca53594))
* **oidc:** adding native OIDC module (WIP) ([cb4b044](https://github.com/xmlking/ngx-starter-kit/commit/cb4b044))
* **preload:** added Preload strategies module ([64fc759](https://github.com/xmlking/ngx-starter-kit/commit/64fc759))
* **preload:** added Preload strategies module ([a8a22f7](https://github.com/xmlking/ngx-starter-kit/commit/a8a22f7))
* **push:** PushNotifications subscription backend API ([7480338](https://github.com/xmlking/ngx-starter-kit/commit/7480338))
* **shared:** split shared module for optimal loading ([fd22e72](https://github.com/xmlking/ngx-starter-kit/commit/fd22e72))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b18c564](https://github.com/xmlking/ngx-starter-kit/commit/b18c564))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b3b0f93](https://github.com/xmlking/ngx-starter-kit/commit/b3b0f93))
* **viewport:** added new Viewport module ([d2f1a2e](https://github.com/xmlking/ngx-starter-kit/commit/d2f1a2e))
* **webapp-e2e:** switching from testcafe to cypress for e2e tests ([cfecbf8](https://github.com/xmlking/ngx-starter-kit/commit/cfecbf8))
* context-menu example ([c215c65](https://github.com/xmlking/ngx-starter-kit/commit/c215c65))


### Performance Improvements

* **core:** upgrade to es2018 ([e525738](https://github.com/xmlking/ngx-starter-kit/commit/e525738))
* **led:** using Attribute for data binding ([751c7a3](https://github.com/xmlking/ngx-starter-kit/commit/751c7a3))
* **login:** enhanced login UX ([9d6344a](https://github.com/xmlking/ngx-starter-kit/commit/9d6344a))
* **notifications:** using 'immer' to patch ngxs state ([53edd1d](https://github.com/xmlking/ngx-starter-kit/commit/53edd1d))
* **polish:** removed console.log ([2fe81b7](https://github.com/xmlking/ngx-starter-kit/commit/2fe81b7))


### Reverts

* **test:** test ([a662801](https://github.com/xmlking/ngx-starter-kit/commit/a662801))

# [1.5.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.4.0...v1.5.0) (2019-03-21)


### Bug Fixes

* fix format:write -- --uncommitted ([27f5c8e](https://github.com/xmlking/ngx-starter-kit/commit/27f5c8e))
* **animations:** making hierarchical route animations default ([0f5c7c7](https://github.com/xmlking/ngx-starter-kit/commit/0f5c7c7))
* **api:** fix auth config ([ef1c8d4](https://github.com/xmlking/ngx-starter-kit/commit/ef1c8d4))
* **api:** make typeorm work with 'ng serve api' ([f561428](https://github.com/xmlking/ngx-starter-kit/commit/f561428))
* **api:** now properly setting some environment variables in process.env ([8d08135](https://github.com/xmlking/ngx-starter-kit/commit/8d08135))
* **api:** using timestamptz type for Dates in Entities ([e0760a7](https://github.com/xmlking/ngx-starter-kit/commit/e0760a7))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([89ba945](https://github.com/xmlking/ngx-starter-kit/commit/89ba945))
* **build:** now updating version ([1fa758b](https://github.com/xmlking/ngx-starter-kit/commit/1fa758b))
* **chat-box:** changed chat-box input style to outline ([69d326d](https://github.com/xmlking/ngx-starter-kit/commit/69d326d))
* **chat-box:** fix chatbox input appearance ([0c2bc18](https://github.com/xmlking/ngx-starter-kit/commit/0c2bc18))
* **chat-box:** fix voice box for safari ([df7260b](https://github.com/xmlking/ngx-starter-kit/commit/df7260b))
* **core:** adding es7/array polyfill to support old browsers ([048320d](https://github.com/xmlking/ngx-starter-kit/commit/048320d))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([25ec23a](https://github.com/xmlking/ngx-starter-kit/commit/25ec23a))
* **dependencies:** @ngxs/store v3.4.3 upgrade ([b6e9c13](https://github.com/xmlking/ngx-starter-kit/commit/b6e9c13))
* **dependencies:** removing more moment dependencies ([bf290bf](https://github.com/xmlking/ngx-starter-kit/commit/bf290bf))
* **dependencies:** removing more moment dependencies ([61426b2](https://github.com/xmlking/ngx-starter-kit/commit/61426b2))
* **dependencies:** updated dependencies ([b592827](https://github.com/xmlking/ngx-starter-kit/commit/b592827))
* **docs:** excluded some folders for compodoc builds ([9cc3ccb](https://github.com/xmlking/ngx-starter-kit/commit/9cc3ccb))
* **docs:** fix compodoc build ([442d112](https://github.com/xmlking/ngx-starter-kit/commit/442d112))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([8f14801](https://github.com/xmlking/ngx-starter-kit/commit/8f14801))
* **eventbus:** workaround for ngxs router plugin issue ([357e42c](https://github.com/xmlking/ngx-starter-kit/commit/357e42c))
* **eventbus:** workaround for ngxs router plugin issue ([600837e](https://github.com/xmlking/ngx-starter-kit/commit/600837e))
* **experiments:** update ngx-knob, lock d3 version ([854df6b](https://github.com/xmlking/ngx-starter-kit/commit/854df6b))
* **features:** using proper flex layout grid to render tiles ([96995a6](https://github.com/xmlking/ngx-starter-kit/commit/96995a6))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([78116e7](https://github.com/xmlking/ngx-starter-kit/commit/78116e7))
* **grid:** grid item hover animation changed ([f216deb](https://github.com/xmlking/ngx-starter-kit/commit/f216deb))
* **material:** mat-placeholde -> mat-label ([fe115e3](https://github.com/xmlking/ngx-starter-kit/commit/fe115e3))
* **nestjs:** fix typescript types ([9cc06aa](https://github.com/xmlking/ngx-starter-kit/commit/9cc06aa))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([83e9606](https://github.com/xmlking/ngx-starter-kit/commit/83e9606))
* **ngx-utils:** using  ngx-utils ([861c846](https://github.com/xmlking/ngx-starter-kit/commit/861c846))
* **notifications:** implement mock data for notifications PUT, POST actions ([cf8874a](https://github.com/xmlking/ngx-starter-kit/commit/cf8874a))
* **notifications:** polish notifications ([7c899a3](https://github.com/xmlking/ngx-starter-kit/commit/7c899a3))
* **notifications:** refactored notifications module ([04bf008](https://github.com/xmlking/ngx-starter-kit/commit/04bf008))
* **package:** update core-js to version 3.0.0 ([74a6d8e](https://github.com/xmlking/ngx-starter-kit/commit/74a6d8e))
* **schematics:** added Store workspace schematics ([29a7fbe](https://github.com/xmlking/ngx-starter-kit/commit/29a7fbe))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([ef34027](https://github.com/xmlking/ngx-starter-kit/commit/ef34027))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([2e0769a](https://github.com/xmlking/ngx-starter-kit/commit/2e0769a))
* **tools:** fix workspace-schematic ngxs ([72151a8](https://github.com/xmlking/ngx-starter-kit/commit/72151a8))
* @types/jasmine vs @types/jest conflict ([014b528](https://github.com/xmlking/ngx-starter-kit/commit/014b528))
* build ([c9b8c85](https://github.com/xmlking/ngx-starter-kit/commit/c9b8c85))
* build ([25f73b6](https://github.com/xmlking/ngx-starter-kit/commit/25f73b6))
* sticky header ([4b52da4](https://github.com/xmlking/ngx-starter-kit/commit/4b52da4))


### Features

* **admin:** adding admin module to manage notifications ([4b13ad2](https://github.com/xmlking/ngx-starter-kit/commit/4b13ad2))
* **admin:** adding admin module to manage notifications ([1c8a0fb](https://github.com/xmlking/ngx-starter-kit/commit/1c8a0fb))
* **analytics:** added google analytics service ([ece6711](https://github.com/xmlking/ngx-starter-kit/commit/ece6711))
* **animations:** added new hierarchical Route Animation ([0accc9e](https://github.com/xmlking/ngx-starter-kit/commit/0accc9e))
* **api:**  kubernetes ([2fba272](https://github.com/xmlking/ngx-starter-kit/commit/2fba272))
* **api:**  kubernetes ([7c49902](https://github.com/xmlking/ngx-starter-kit/commit/7c49902))
* **api:** added 2nd node-app 'backend' to showcase file upload ([43c861d](https://github.com/xmlking/ngx-starter-kit/commit/43c861d))
* **api:** added kubernetes api ([00f520b](https://github.com/xmlking/ngx-starter-kit/commit/00f520b))
* **api:** added push API module to save PushSubscriptions ([64d0d6c](https://github.com/xmlking/ngx-starter-kit/commit/64d0d6c))
* **api:** adding CacheModule ([04c5183](https://github.com/xmlking/ngx-starter-kit/commit/04c5183))
* **api:** adding profile sub-module ([45eeca0](https://github.com/xmlking/ngx-starter-kit/commit/45eeca0))
* **api:** dynamically load entities using webpack require.context ([c22e78b](https://github.com/xmlking/ngx-starter-kit/commit/c22e78b))
* **api:** list API now support Pagination and Search ([55e3e71](https://github.com/xmlking/ngx-starter-kit/commit/55e3e71))
* **api:** migrated database from mongodb to postgres ([af401cc](https://github.com/xmlking/ngx-starter-kit/commit/af401cc))
* **api:** polish,  refactored APIs ([98f3fa8](https://github.com/xmlking/ngx-starter-kit/commit/98f3fa8))
* **api:** polish,  refactored APIs ([c7340b3](https://github.com/xmlking/ngx-starter-kit/commit/c7340b3))
* **api:** refactored ConfigService ([73b7541](https://github.com/xmlking/ngx-starter-kit/commit/73b7541))
* **api:** upgrade NestJS to 6.0.0 ([8dbe9d9](https://github.com/xmlking/ngx-starter-kit/commit/8dbe9d9))
* **app:** Automatically set pageTitle from route data ([3679b2c](https://github.com/xmlking/ngx-starter-kit/commit/3679b2c))
* **auth:** Auth module now support CodeFlow/HybridFlow with PKCE ([e098bee](https://github.com/xmlking/ngx-starter-kit/commit/e098bee))
* **auth:** fix sso: removed initialNavigation ([429b448](https://github.com/xmlking/ngx-starter-kit/commit/429b448))
* **auth:** using  @xmlking/angular-oauth2-oidc-all ([63c6c07](https://github.com/xmlking/ngx-starter-kit/commit/63c6c07))
* **components:** added image comparison component ([c73a020](https://github.com/xmlking/ngx-starter-kit/commit/c73a020))
* **core:** lib modules published to NPM ([d5f7d4b](https://github.com/xmlking/ngx-starter-kit/commit/d5f7d4b))
* **core:** using Inject(WINDOW) and new ServiceWorker ([5062e92](https://github.com/xmlking/ngx-starter-kit/commit/5062e92))
* **core:** using ngx-quicklink preloading strategy ([9c113ac](https://github.com/xmlking/ngx-starter-kit/commit/9c113ac))
* **core:** using NGXS NgxsAfterBootstrap lifecycle hook ([db09fb2](https://github.com/xmlking/ngx-starter-kit/commit/db09fb2))
* **dashboard:** added profile and settings pages ([b1aae1b](https://github.com/xmlking/ngx-starter-kit/commit/b1aae1b))
* **dashboard:** added profile and settings pages ([5aaa29c](https://github.com/xmlking/ngx-starter-kit/commit/5aaa29c))
* **dashboard:** adding profile update feature with avatar (WIP) ([10e5f95](https://github.com/xmlking/ngx-starter-kit/commit/10e5f95))
* **dashing:** initial experiment to implement dashing.io ([e08f802](https://github.com/xmlking/ngx-starter-kit/commit/e08f802))
* **dashing:** initial experiment to implement dashing.io ([b306a4f](https://github.com/xmlking/ngx-starter-kit/commit/b306a4f))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([4b38ff1](https://github.com/xmlking/ngx-starter-kit/commit/4b38ff1))
* **deploy:** added k8s manifest files for API ([c68a363](https://github.com/xmlking/ngx-starter-kit/commit/c68a363))
* **deploy:** added k8s manifest files for API ([324d3c1](https://github.com/xmlking/ngx-starter-kit/commit/324d3c1))
* **deploy:** polish ngxapi Dockerfile. ([0ced24a](https://github.com/xmlking/ngx-starter-kit/commit/0ced24a))
* **deployment:** adding k8s deployment docs for postgres and keycloak ([49c4c75](https://github.com/xmlking/ngx-starter-kit/commit/49c4c75))
* **deps:** latest angular and nx ([0de5dda](https://github.com/xmlking/ngx-starter-kit/commit/0de5dda))
* **docs:** added FAQ for removing NgZone ([d09de4f](https://github.com/xmlking/ngx-starter-kit/commit/d09de4f))
* **docs:** added FAQ for removing NgZone ([5b096f4](https://github.com/xmlking/ngx-starter-kit/commit/5b096f4))
* **docs:** added FAQ for removing NgZone ([30c677d](https://github.com/xmlking/ngx-starter-kit/commit/30c677d))
* **docs:** added FAQ for removing NgZone ([dfc107b](https://github.com/xmlking/ngx-starter-kit/commit/dfc107b))
* **entity:** added column templates and sticky column options ([46abb0f](https://github.com/xmlking/ngx-starter-kit/commit/46abb0f))
* **experiments:** added new example to showcase flex-layout with grid ([dbc6a56](https://github.com/xmlking/ngx-starter-kit/commit/dbc6a56))
* **ngx-utils:** added mask directive ([36e7c8f](https://github.com/xmlking/ngx-starter-kit/commit/36e7c8f))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([bfac87e](https://github.com/xmlking/ngx-starter-kit/commit/bfac87e))
* **ngx-utils:** replaced Moment lib with date-fns ([c350a1b](https://github.com/xmlking/ngx-starter-kit/commit/c350a1b))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([8ae9100](https://github.com/xmlking/ngx-starter-kit/commit/8ae9100))
* **ngx-utils:** using new untilDestroy ([96b00d7](https://github.com/xmlking/ngx-starter-kit/commit/96b00d7))
* **notifications:** added field: native to  Notification model ([49c3056](https://github.com/xmlking/ngx-starter-kit/commit/49c3056))
* **notifications:** added notify, notifyAll API ([8189e5d](https://github.com/xmlking/ngx-starter-kit/commit/8189e5d))
* **notifications:** refactored notifications module ([2d85fd3](https://github.com/xmlking/ngx-starter-kit/commit/2d85fd3))
* **notifications:** UX changes to match API endpoint changes. ([f11bbd9](https://github.com/xmlking/ngx-starter-kit/commit/f11bbd9))
* **oidc:** adding native OIDC module (WIP) ([ca53594](https://github.com/xmlking/ngx-starter-kit/commit/ca53594))
* **oidc:** adding native OIDC module (WIP) ([cb4b044](https://github.com/xmlking/ngx-starter-kit/commit/cb4b044))
* **preload:** added Preload strategies module ([64fc759](https://github.com/xmlking/ngx-starter-kit/commit/64fc759))
* **preload:** added Preload strategies module ([a8a22f7](https://github.com/xmlking/ngx-starter-kit/commit/a8a22f7))
* **push:** PushNotifications subscription backend API ([7480338](https://github.com/xmlking/ngx-starter-kit/commit/7480338))
* **shared:** split shared module for optimal loading ([fd22e72](https://github.com/xmlking/ngx-starter-kit/commit/fd22e72))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b18c564](https://github.com/xmlking/ngx-starter-kit/commit/b18c564))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([b3b0f93](https://github.com/xmlking/ngx-starter-kit/commit/b3b0f93))
* **viewport:** added new Viewport module ([d2f1a2e](https://github.com/xmlking/ngx-starter-kit/commit/d2f1a2e))
* **webapp-e2e:** switching from testcafe to cypress for e2e tests ([cfecbf8](https://github.com/xmlking/ngx-starter-kit/commit/cfecbf8))
* context-menu example ([c215c65](https://github.com/xmlking/ngx-starter-kit/commit/c215c65))


### Performance Improvements

* **core:** upgrade to es2018 ([e525738](https://github.com/xmlking/ngx-starter-kit/commit/e525738))
* **led:** using Attribute for data binding ([751c7a3](https://github.com/xmlking/ngx-starter-kit/commit/751c7a3))
* **login:** enhanced login UX ([9d6344a](https://github.com/xmlking/ngx-starter-kit/commit/9d6344a))
* **notifications:** using 'immer' to patch ngxs state ([53edd1d](https://github.com/xmlking/ngx-starter-kit/commit/53edd1d))
* **polish:** removed console.log ([2fe81b7](https://github.com/xmlking/ngx-starter-kit/commit/2fe81b7))


### Reverts

* **test:** test ([a662801](https://github.com/xmlking/ngx-starter-kit/commit/a662801))

# [1.5.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.4.0...v1.5.0) (2019-01-30)


### Bug Fixes

* **grid:** grid item hover animation changed ([73e7af3](https://github.com/xmlking/ngx-starter-kit/commit/73e7af3))


### Features

* **dashing:** initial experiment to implement dashing.io ([c16bac6](https://github.com/xmlking/ngx-starter-kit/commit/c16bac6))
* **dashing:** initial experiment to implement dashing.io ([2ce5f6a](https://github.com/xmlking/ngx-starter-kit/commit/2ce5f6a))
* **preload:** added Preload strategies module ([3426302](https://github.com/xmlking/ngx-starter-kit/commit/3426302))
* **preload:** added Preload strategies module ([65b6642](https://github.com/xmlking/ngx-starter-kit/commit/65b6642))
* **shared:** split shared module for optimal loading ([8cb2cdd](https://github.com/xmlking/ngx-starter-kit/commit/8cb2cdd))

# [1.4.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.3.0...v1.4.0) (2019-01-20)


### Bug Fixes

* **animations:** making hierarchical route animations default ([800153a](https://github.com/xmlking/ngx-starter-kit/commit/800153a))
* **api:** using timestamptz type for Dates in Entities ([a528864](https://github.com/xmlking/ngx-starter-kit/commit/a528864))
* **chat-box:** changed chat-box input style to outline ([a252f4e](https://github.com/xmlking/ngx-starter-kit/commit/a252f4e))
* **chat-box:** fix chatbox input appearance ([1653547](https://github.com/xmlking/ngx-starter-kit/commit/1653547))
* **dependencies:** removing more moment dependencies ([a22cbf2](https://github.com/xmlking/ngx-starter-kit/commit/a22cbf2))
* **dependencies:** removing more moment dependencies ([8a5492e](https://github.com/xmlking/ngx-starter-kit/commit/8a5492e))
* **dependencies:** updated dependencies ([c97573a](https://github.com/xmlking/ngx-starter-kit/commit/c97573a))
* **ngx-utils:** fix date-fns formatTimeInWords pipe's change detection ([7c5c240](https://github.com/xmlking/ngx-starter-kit/commit/7c5c240))
* **notifications:** implement mock data for notifications PUT, POST actions ([45cfbe6](https://github.com/xmlking/ngx-starter-kit/commit/45cfbe6))
* **notifications:** polish notifications ([d64f64b](https://github.com/xmlking/ngx-starter-kit/commit/d64f64b))
* **notifications:** refactored notifications module ([fa7c98c](https://github.com/xmlking/ngx-starter-kit/commit/fa7c98c))


### Features

* **admin:** adding admin module to manage notifications ([db85e50](https://github.com/xmlking/ngx-starter-kit/commit/db85e50))
* **admin:** adding admin module to manage notifications ([56cdcf8](https://github.com/xmlking/ngx-starter-kit/commit/56cdcf8))
* **api:**  kubernetes ([ffdab6c](https://github.com/xmlking/ngx-starter-kit/commit/ffdab6c))
* **api:**  kubernetes ([dc5922a](https://github.com/xmlking/ngx-starter-kit/commit/dc5922a))
* **api:** added kubernetes api ([28f6a50](https://github.com/xmlking/ngx-starter-kit/commit/28f6a50))
* **api:** dynamically load entities using webpack require.context ([57dfd96](https://github.com/xmlking/ngx-starter-kit/commit/57dfd96))
* **auth:** fix sso: removed initialNavigation ([7e0114d](https://github.com/xmlking/ngx-starter-kit/commit/7e0114d))
* **auth:** using  [@xmlking](https://github.com/xmlking)/angular-oauth2-oidc-all ([dd02035](https://github.com/xmlking/ngx-starter-kit/commit/dd02035))
* **core:** lib modules published to NPM ([4a3540a](https://github.com/xmlking/ngx-starter-kit/commit/4a3540a))
* **docs:** added FAQ for removing NgZone ([f25ec6a](https://github.com/xmlking/ngx-starter-kit/commit/f25ec6a))
* **docs:** added FAQ for removing NgZone ([0d4bb09](https://github.com/xmlking/ngx-starter-kit/commit/0d4bb09))
* **docs:** added FAQ for removing NgZone ([cced6fd](https://github.com/xmlking/ngx-starter-kit/commit/cced6fd))
* **docs:** added FAQ for removing NgZone ([04ef04f](https://github.com/xmlking/ngx-starter-kit/commit/04ef04f))
* **entity:** added column templates and sticky column options ([92d4cb7](https://github.com/xmlking/ngx-starter-kit/commit/92d4cb7))
* **ngx-utils:** replaced Moment lib with date-fns ([0dc4e2e](https://github.com/xmlking/ngx-starter-kit/commit/0dc4e2e))
* **ngx-utils:** updated formatTimeInWords Pipe to reflect new date-fns changes in 2.0.0-alpha.27 ([2b79d8e](https://github.com/xmlking/ngx-starter-kit/commit/2b79d8e))
* **notifications:** refactored notifications module ([1599ab7](https://github.com/xmlking/ngx-starter-kit/commit/1599ab7))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([48b61f1](https://github.com/xmlking/ngx-starter-kit/commit/48b61f1))
* **socketio-plugin:** WebSocketConnected event now carry socketId ([fe61005](https://github.com/xmlking/ngx-starter-kit/commit/fe61005))
* **viewport:** added new Viewport module ([7b47023](https://github.com/xmlking/ngx-starter-kit/commit/7b47023))


### Performance Improvements

* **core:** upgrade to es2018 ([ac6c1a9](https://github.com/xmlking/ngx-starter-kit/commit/ac6c1a9))
* **notifications:** using 'immer' to patch ngxs state ([5e5e255](https://github.com/xmlking/ngx-starter-kit/commit/5e5e255))

# [1.3.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.2.0...v1.3.0) (2018-11-23)


### Bug Fixes

* **api:** fix auth config ([67f8c57](https://github.com/xmlking/ngx-starter-kit/commit/67f8c57))
* **api:** make typeorm work with 'ng serve api' ([e549023](https://github.com/xmlking/ngx-starter-kit/commit/e549023))
* **auth:** fix redirection to dashboard after login via ImplicitFLow ([6685ce9](https://github.com/xmlking/ngx-starter-kit/commit/6685ce9))
* **chat-box:** fix voice box for safari ([5068a72](https://github.com/xmlking/ngx-starter-kit/commit/5068a72))
* **core:** adding es7/array polyfill to support old browsers ([7340567](https://github.com/xmlking/ngx-starter-kit/commit/7340567))
* **core:** removed ng-package.prod.json as it is no longer needed by nx ([f51f0f5](https://github.com/xmlking/ngx-starter-kit/commit/f51f0f5))
* **eventbus:** workaround for ngxs router plugin issue ([78a41a2](https://github.com/xmlking/ngx-starter-kit/commit/78a41a2))
* **eventbus:** workaround for ngxs router plugin issue ([9fb3ab0](https://github.com/xmlking/ngx-starter-kit/commit/9fb3ab0))
* **experiments:** update ngx-knob, lock d3 version ([1b26e5b](https://github.com/xmlking/ngx-starter-kit/commit/1b26e5b))
* **grid:** fix drag: changed cdkDragRootElement from .mat-dialog-container .cdk-overlay-pane ([92153e6](https://github.com/xmlking/ngx-starter-kit/commit/92153e6))
* **material:** mat-placeholde -> mat-label ([95b3141](https://github.com/xmlking/ngx-starter-kit/commit/95b3141))
* **ThemePicker:** ThemePicker now using PreferenceState for storage ([d448bf8](https://github.com/xmlking/ngx-starter-kit/commit/d448bf8))


### Features

* **analytics:** added google analytics service ([f52e75f](https://github.com/xmlking/ngx-starter-kit/commit/f52e75f))
* **api:** added push API module to save PushSubscriptions ([945034c](https://github.com/xmlking/ngx-starter-kit/commit/945034c))
* **core:** using Inject(WINDOW) and new ServiceWorker ([2bfc467](https://github.com/xmlking/ngx-starter-kit/commit/2bfc467))
* **dashboard:** added profile and settings pages ([848d51e](https://github.com/xmlking/ngx-starter-kit/commit/848d51e))
* **dashboard:** added profile and settings pages ([1a77689](https://github.com/xmlking/ngx-starter-kit/commit/1a77689))
* **notifications:** added field: native to  Notification model ([12fa080](https://github.com/xmlking/ngx-starter-kit/commit/12fa080))
* **notifications:** added notify, notifyAll API ([3600c99](https://github.com/xmlking/ngx-starter-kit/commit/3600c99))
* **push:** PushNotifications subscription backend API ([4b65131](https://github.com/xmlking/ngx-starter-kit/commit/4b65131))


### Performance Improvements

* **polish:** removed console.log ([12bde29](https://github.com/xmlking/ngx-starter-kit/commit/12bde29))


### Reverts

* **test:** test ([348c307](https://github.com/xmlking/ngx-starter-kit/commit/348c307))

# [1.2.0](https://github.com/xmlking/ngx-starter-kit.git/compare/v1.1.0...v1.2.0) (2018-10-28)


### Bug Fixes

* **features:** using proper flex layout grid to render tiles ([8d68bdc](https://github.com/xmlking/ngx-starter-kit.git/commit/8d68bdc))
* **ngx-utils:** using  ngx-utils ([a3dddab](https://github.com/xmlking/ngx-starter-kit.git/commit/a3dddab))


### Features

* **animations:** added new hierarchical Route Animation ([a799175](https://github.com/xmlking/ngx-starter-kit.git/commit/a799175))
* **api:** added 2nd node-app 'backend' to showcase file upload ([7ab7c5d](https://github.com/xmlking/ngx-starter-kit.git/commit/7ab7c5d))
* **api:** migrated database from mongodb to postgres ([a1ad294](https://github.com/xmlking/ngx-starter-kit.git/commit/a1ad294))
* **app:** Automatically set pageTitle from route data ([6f337c5](https://github.com/xmlking/ngx-starter-kit.git/commit/6f337c5))
* **dependencies:** nrwl/nx -> 6.4.0 , rebuild apps/api module with nx node-apps ([779b596](https://github.com/xmlking/ngx-starter-kit.git/commit/779b596))
* **experiments:** added new example to showcase flex-layout with grid ([5034b6e](https://github.com/xmlking/ngx-starter-kit.git/commit/5034b6e))
* **ngx-utils:** ngx-utils module replace ngx-pipes ([8f4e7ec](https://github.com/xmlking/ngx-starter-kit.git/commit/8f4e7ec))
* **ngx-utils:** using new untilDestroy ([1e569e8](https://github.com/xmlking/ngx-starter-kit.git/commit/1e569e8))

# [1.1.0](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.4...v1.1.0) (2018-10-06)


### Bug Fixes

* **docs:** excluded some folders for compodoc builds ([013710c](https://github.com/xmlking/ngx-starter-kit/commit/013710c))
* **docs:** fix compodoc build ([5ff3107](https://github.com/xmlking/ngx-starter-kit/commit/5ff3107))
* **draggable:** replaced DraggableModule in favor of CDK DragDropModule ([41f729a](https://github.com/xmlking/ngx-starter-kit/commit/41f729a))
* **schematics:** added Store workspace schematics ([c8bba51](https://github.com/xmlking/ngx-starter-kit/commit/c8bba51))
* **tools:** fix workspace-schematic ngxs ([1603246](https://github.com/xmlking/ngx-starter-kit/commit/1603246))


### Features

* **components:** added image comparison component ([4454e1d](https://github.com/xmlking/ngx-starter-kit/commit/4454e1d))

## [1.0.4](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.3...v1.0.4) (2018-09-24)


### Performance Improvements

* **led:** using Attribute for data binding ([5bce243](https://github.com/xmlking/ngx-starter-kit/commit/5bce243))

## [1.0.3](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.2...v1.0.3) (2018-09-23)


### Performance Improvements

* **login:** enhanced login UX ([f2f4865](https://github.com/xmlking/ngx-starter-kit/commit/f2f4865))

## [1.0.2](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.1...v1.0.2) (2018-09-22)


### Bug Fixes

* **nestjs:** fix typescript types ([97f855a](https://github.com/xmlking/ngx-starter-kit/commit/97f855a))
* **test:** nrwl/nx -> 6.4.0-beta.1 ([b032276](https://github.com/xmlking/ngx-starter-kit/commit/b032276))

## [1.0.1](https://github.com/xmlking/ngx-starter-kit/compare/v1.0.0...v1.0.1) (2018-09-09)


### Bug Fixes

* **build:** now updating version ([2d913ea](https://github.com/xmlking/ngx-starter-kit/commit/2d913ea))

# 1.0.0 (2018-09-09)


### Bug Fixes

* [@types](https://github.com/types)/jasmine vs [@types](https://github.com/types)/jest conflict ([902a4f8](https://github.com/xmlking/ngx-starter-kit/commit/902a4f8))
* build ([deac7a9](https://github.com/xmlking/ngx-starter-kit/commit/deac7a9))
* build ([ed91ffc](https://github.com/xmlking/ngx-starter-kit/commit/ed91ffc))
* sticky header ([faf80ad](https://github.com/xmlking/ngx-starter-kit/commit/faf80ad))
* fix format:write -- --uncommitted ([3b0eb49](https://github.com/xmlking/ngx-starter-kit/commit/3b0eb49))


### Features

* context-menu example ([745a0bd](https://github.com/xmlking/ngx-starter-kit/commit/745a0bd))
* **deps:** latest angular and nx ([80918df](https://github.com/xmlking/ngx-starter-kit/commit/80918df))
