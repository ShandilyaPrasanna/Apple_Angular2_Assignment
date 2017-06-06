import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>APP COMPONENT</h1>
              <nav>
              <a routerLink="/users" routerLinkActive="active">USERS LIST</a>
              <a routerLink="/customers" routerLinkActive="active">CUSTOMERS LIST</a>
              </nav>
              <router-outlet></router-outlet>`
})
export class AppComponent {}
