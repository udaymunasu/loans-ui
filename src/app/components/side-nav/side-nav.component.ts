import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { SideNavDirection } from './side-nav-direction';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  list = [
    {
      number: '1',
      name: 'home',
      icon: 'home',
      routerLink: 'home'
    },
    {
      number: '2',
      name: 'create',
      icon: 'create',
      routerLink: 'create'
    },
    {
      number: '3',
      name: 'register',
      icon: 'register',
      routerLink: 'register'
    },
    {
      number: '4',
      name: 'customers',
      icon: 'customers',
      routerLink: 'customers'
    },
    {
      number: '5',
      name: 'Settings',
      icon: 'Settings',
    },
    {
      number: '6',
      name: 'About',
      icon: 'About',
    },
    {
      number: '7',
      name: 'Contact',
      icon: 'Contact',
    },
    {
      number: '8',
      name: 'Relations',
      icon: 'Relations',
    },
    {
      number: '9',
      name: 'invoices',
      icon: 'invoices',
    },
  ];

  showSideNav: Observable<boolean>;

  @Input() sideNavStatus: boolean = false;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};

    navBarStyle.transition =
      this.direction +
      ' ' +
      this.duration +
      's, visibility ' +
      this.duration +
      's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : this.navWidth * -1) + 'px';

    return navBarStyle;
  }
}
