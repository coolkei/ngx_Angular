// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  NODE_TLS_REJECT_UNAUTHORIZED: 0,
  ALLOW_WHITE_LIST: ['::ffff:127.0.0.1', '::1'],
  LOG_LEVEL: 'debug',

  server: {
    host: '0.0.0.0',
    domainUrl: 'http://localhost:3000',
    port: 3000,
    globalPrefix: '/api',
  },

  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'cockpit',
    username: 'cockpit',
    password: 'cockpit123',
    keepConnectionAlive: true,
    logging: true,
    synchronize: true,
  },

  auth: {
    clientId: 'ngxapi',
    // issuer: 'http://localhost:8080/auth/realms/ngx',
    issuer: 'https://keycloak-ngx.1d35.starter-us-east-1.openshiftapps.com/auth/realms/ngx',
  },

  email: {
    transport: {
      host: 'mail.google.com',
      port: 25,
    },
    defaults: {
      from: '"sumo demo" <sumo@demo.com>',
    },
    templateDir: 'apps/api/src/assets/email-templates',
  },

  // Key generation: https://web-push-codelab.glitch.me
  webPush: {
    subject: 'mailto: sumo@demo.com',
    publicKey: 'BAJq-yHlSNjUqKW9iMY0hG96X9WdVwetUFDa5rQIGRPqOHKAL_fkKUe_gUTAKnn9IPAltqmlNO2OkJrjdQ_MXNg',
    privateKey: 'cwh2CYK5h_B_Gobnv8Ym9x61B3qFE2nTeb9BeiZbtMI',
  },
  kubernetes: {
    CLUSTER1: {
      baseUrl: 'https://cluster1:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'AAAAAAAAAAAA',
    },
    CLUSTER2: {
      baseUrl: 'https://cluster2:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'BBBBBBBBBBBB',
    },
    CLUSTER3: {
      baseUrl: 'https://cluster3:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'CCCCCCCCCCCCC',
    },
    CLUSTER4: {
      baseUrl: 'https://cluster4:8080',
      version: '1.10',
      /* tslint:disable-next-line:max-line-length */
      token: 'DDDDDDDDDDDDD',
    },
  },
};
