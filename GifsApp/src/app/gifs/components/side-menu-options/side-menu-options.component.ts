import { GifService } from '@/gifs/services/gifs.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface menuOption {
  label: string;
  route: string;
  subLabel: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  styleUrl: './side-menu-options.component.css',
})
export class SideMenuOptionsComponent {
  menuOptions: menuOption[] = [
    {
      label: 'Trending',
      route: '/dashboard/trending',
      subLabel: 'Most popular gifs',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Search',
      route: '/dashboard/search',
      subLabel: 'Find your gif',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];

  gifService = inject(GifService);
}
