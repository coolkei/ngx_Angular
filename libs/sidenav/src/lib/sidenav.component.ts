import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  HostBinding,
  ChangeDetectorRef,
  HostListener,
  Inject,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MenuItem, MenuService, SidenavState } from '@ngx-starter-kit/navigator';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { WINDOW } from '@ngx-starter-kit/core';
// import { sidenavAnimation } from '@ngx-starter-kit/animations';

/** @dynamic */
@AutoUnsubscribe()
@Component({
  selector: 'ngx-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  // animations: [sidenavAnimation]
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  items: MenuItem[];

  constructor(
    private router: Router,
    private menuService: MenuService,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window,
  ) {}

  ngOnInit() {
    this.menuService.items$.subscribe((items: MenuItem[]) => {
      this.items = items;
    });

    // this.router.events
    //   .subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.menuService.setCurrentlyOpenByRoute(event.url);
    //     // setTimeout(() => {
    //     //   window.dispatchEvent(new Event('resize'));
    //     // }, 400);
    //     this.cd.markForCheck();
    //   }
    // });
  }

  ngOnDestroy() {}

  toggleIconSidenav() {
    setTimeout(() => {
      this.window.dispatchEvent(new Event('resize'));
    }, 300);

    this.menuService.isIconSidenav = !this.menuService.isIconSidenav;

    const snackBarConfig: MatSnackBarConfig = {
      duration: 10000,
    } as MatSnackBarConfig;

    if (this.menuService.isIconSidenav) {
      this.snackBar.open(
        'You activated Icon-Sidenav, move your mouse to the content and see what happens!',
        '',
        snackBarConfig,
      );
    }
  }

  isIconSidenav(): boolean {
    return this.menuService.isIconSidenav;
  }
}
