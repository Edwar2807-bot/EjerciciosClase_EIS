import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

interface MenuOptions {
  label: string;
  subLabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-side-menu-options-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options-component.html',
  styles: ``
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOptions[] = [{
    label: 'Trending',
    subLabel: 'Gifs Populares',
    icon: 'fa-solid fa-chart-line',
    route: '/dashboard/trending'
  },
  {
    label: 'Search',
    subLabel: 'Buscador de Gifs',
    icon: 'fa-solid fa-magnifying-glass',
    route: '/dashboard/search'
  }]
}
