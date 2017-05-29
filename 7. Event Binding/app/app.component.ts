import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<button (click)="inCounter()">Increment Counter</button>
             <input value="Enter text" #input (keydown)="onChange(input.value)"/>`
})
export class AppComponent {
public counter=0;
public string="";

inCounter(){
this.counter++;
console.log(this.counter);
}

onChange(val){
this.string=val;
console.log(this.string);
}
}
