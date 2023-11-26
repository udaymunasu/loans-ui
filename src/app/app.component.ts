import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loand-ui';
  sideNavStatus: boolean = false;

  isSideNavCollapsed = false;
  screenWidth = 0;

  isSideNavOpen = false;

  toggleSideNav(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
    debugger

  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    debugger
  }

  prepareRouteTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
