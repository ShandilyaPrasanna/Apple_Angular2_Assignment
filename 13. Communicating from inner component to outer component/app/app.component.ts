import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>APP COMPONENT</h1>
<h2>User Clicked In User Component-> {{userData}}</h2>
  <app-users (userEvent)="userData=$event"></app-users>`
})
export class AppComponent {
public userData:string;
}
