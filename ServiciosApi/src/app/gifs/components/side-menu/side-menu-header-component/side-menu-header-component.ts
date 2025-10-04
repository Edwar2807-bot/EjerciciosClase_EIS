import { Component } from '@angular/core';
import { environment } from '@environments/environment.development';

@Component({
  selector: 'app-side-menu-header-component',
  imports: [],
  templateUrl: './side-menu-header-component.html',
  styles: ``
})
export class SideMenuHeaderComponent {
  envs = environment;
}
