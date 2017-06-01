import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>APP COMPONENT</h1>
<h2>Enter Country Of User in User Component</h2>
<input #appComp (keyup)="0"/>
  <app-users [parentData]="appComp.value"></app-users>`
})
export class AppComponent {}
