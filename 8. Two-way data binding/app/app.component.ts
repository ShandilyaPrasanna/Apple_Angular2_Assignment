import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
             <input value="string"  [(ngModel)]="string"/>
             {{string}}`
})
export class AppComponent {

public string="Two Way data Binding";
}
}
