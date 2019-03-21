import { Component, OnInit } from '@angular/core';
import  * as screenfull from 'screenfull';

@Component({
  selector: 'ngx-fullscreen-toggle',
  templateUrl: './fullscreen-toggle.component.html',
  styleUrls: ['./fullscreen-toggle.component.scss'],
})
export class FullscreenToggleComponent implements OnInit {
  isFullscreen: boolean;

  constructor() {}

  ngOnInit() {}

  toggleFullscreen() {
    if ((screenfull as any).enabled) {
      (screenfull as any).toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }
}
