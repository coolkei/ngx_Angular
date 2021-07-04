import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import packageJson from '../../../../../../package.json';

@Component({
  selector: 'ngx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  environment = environment.envName;
  constructor() {}

  ngOnInit() {}

  get version() {
    if (packageJson.version) {
      return packageJson.version;
    }
    return '';
  }
}
