import { Component, OnInit } from '@angular/core';
import { cardAnimation } from '@ngx-starter-kit/animations';
import { List } from 'immutable';

@Component({
  selector: 'ngx-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [cardAnimation]
})
export class AnimationsComponent implements OnInit {
  crumbs = List([{ name: 'Dashboard', link: '/dashboard' }, { name: 'Experiments', link: '/dashboard/experiments' }, { name: 'Animations' }]);
  animationState: string;

  constructor() {}

  ngOnInit() {}

  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
