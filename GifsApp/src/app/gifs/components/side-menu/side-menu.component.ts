import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuHeaderComponent } from '../side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-side-menu',
  imports: [SideMenuOptionsComponent, SideMenuHeaderComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {}
