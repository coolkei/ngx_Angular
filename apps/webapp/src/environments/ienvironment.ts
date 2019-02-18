import { OidcProviderConfig } from '@ngx-starter-kit/oidc';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface IEnvironment {
  production: boolean;
  envName: string;

  // Enables use of ng.profiler.timeChangeDetection(); in browser console
  enableDebugTools?: boolean;
  logLevel?: LogLevel;
  auth?: OidcProviderConfig;
  [key: string]: any;
}
