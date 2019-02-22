# API

## Description

Backend API build with [Nest](https://github.com/nestjs/nest) Framework.

## Built with

| Component      | Using                                                                                            | Descrption |
| -------------- | ------------------------------------------------------------------------------------------------ | ---------- |
| Base           | [NestJS](https://nestjs.com)                                                                     |
| ORM            | [TypeORM](http://typeorm.io/)                                                                    |
| File Upload    | [Multer](https://github.com/expressjs/multer)                                                    |
| Validation     | [Class-Validator](https://github.com/typestack/class-validator)                                  |
| Documentation  | [Open API(Swagger)](https://swagger.io)                                                          |
| Authentication | [Passport.js](http://www.passportjs.org)                                                         |
| Testing        | [Jest](https://github.com/facebook/jest) & [SuperTest](https://github.com/visionmedia/supertest) |
| Code Style     | [Prettier](https://github.com/prettier/prettier) & [TS-Lint](https://palantir.github.io/tslint/) |

## Development

### Run

#### Postgres

> start Postgres

```bash
# start local postgres
docker-compose up postgres
docker-compose up -V postgres #remove volumes

# stop local postgres before restart again
docker-compose down
docker-compose down -v #remove volumes
```

> if error `The container name "/postgres" is already in use by container`, remove orphan container.

```bash
docker ps -a
docker rm 82be5234c94a
```

#### Run Dev Mode

```bash
# start in watch mode
ng serve api
# to turn on logging for `request`
NODE_DEBUG=request ng serve api
DEBUG=typeorm:* ng serve api
# optinally you can run with prod env(environment.prod.ts) for tesrting! use this for testing only.
ng serve api --prod
```

#### Run Prod Mode

```bash
# clean dist first
npx rimraf dist
# then build
ng build api --prod
# then run
node dist/apps/api/main.js
```

**API URL:** http://localhost:3000

**Swagger Docs URL:** http://localhost:3000/docs

### Build

> build for production env

```bash
ng build api --prod
```

### Generate

> scaffolding nest artifacts <br/>
> For more details checkout [playbook](../../PLAYBOOK-NEST.md)

```bash
# check of nest installed
nest info

# scaffold auth module
nest g module app/auth  --dry-run
nest g controller auth app/auth --flat --dry-run
nest g service auth app/auth --flat --dry-run
nest g class user.entity app/auth --no-spec --dry-run
nest g class auth.exception app/auth --no-spec --dry-run
```

### Unit Test

> coverage will be generate in coverage/apps/api

```bash
# unit test only changed
ng test api --onlyChanged
# generate coverage
ng test api --codeCoverage
# test in CI env
ng test api --runInBand
```

### E2E Test

```bash
ng e2e api-e2e
# e2e test with watch mode
ng e2e api-e2e --watch
# e2e test in CI env
ng e2e api-e2e --forceExit --detectOpenHandles
```

### Reference

- Awesome Nest
  - https://github.com/juliandavidmr/awesome-nest
- NestJS Samples
  - https://github.com/nestjs/nest/tree/master/sample
- TypeORL Samples
  - https://github.com/typeorm/typeorm/tree/master/sample
