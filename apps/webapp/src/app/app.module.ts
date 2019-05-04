import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuicklinkModule, QuicklinkStrategy } from '@xmlking/ngx-quicklink';
import { CoreModule } from '@ngx-starter-kit/core';

import { environment } from '@env/environment';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = {
    // override hammerjs default configuration
    pan: { direction: Hammer.DIRECTION_ALL },
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'home',
          loadChildren: () => import('@ngx-starter-kit/home').then(m => m.HomeModule),
          data: { preload: true },
        },
        {
          path: 'dashboard',
          loadChildren: () => import('@ngx-starter-kit/dashboard').then(m => m.DashboardModule),
          data: { preload: true },
        },
        {
          path: 'admin',
          loadChildren: () => import('@ngx-starter-kit/admin').then(m => m.AdminModule),
          data: { preload: false },
        },
        {
          path: '404',
          loadChildren: () => import('@ngx-starter-kit/not-found').then(m => m.NotFoundModule),
          data: { title: '404', preload: false },
        },
        // 404 should be last
        { path: '**', redirectTo: '404', pathMatch: 'full' },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        preloadingStrategy: QuicklinkStrategy,
        paramsInheritanceStrategy: 'always',
        // enableTracing: true, // enable to debug routing during development
        // onSameUrlNavigation: 'reload'
      },
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CoreModule, // IMP: Please keep CoreModule after RouterModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
