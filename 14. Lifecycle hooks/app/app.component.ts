import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>APP COMPONENT</h1>
<h2>Enter Country Of User in User Component</h2>
<input #appComp (keyup)="0"/>
  <app-users [parentData]="appComp.value"></app-users>`
})
export class AppComponent implements OnInit,OnDestroy,OnChanges {
ngOnInit(){
console.log("ngOnInit Called");
}
ngOnDestroy(){
console.log("ngOnDestroy Called");
}
ngOnChanges(){
console.log("ngOnChanges Called");
}

}
