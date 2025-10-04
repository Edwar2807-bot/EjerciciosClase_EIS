import { Component } from '@angular/core';
import {SideMenuOptionsComponent} from './side-menu-options-component/side-menu-options-component';
import {SideMenuHeaderComponent} from './side-menu-header-component/side-menu-header-component';

@Component({
  selector: 'gif-side-menu',
  imports: [
    SideMenuOptionsComponent,
    SideMenuHeaderComponent
  ],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

}
