import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  hideSideNav: boolean = false;
  constructor() { }

  toggleSideNav(): void {
    console.log(1);
    this.hideSideNav = !this.hideSideNav;
  }

}
