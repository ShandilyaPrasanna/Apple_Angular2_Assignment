import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<input [value]="string" [required]="boolean"/>
              <input value="{{string}}" required="{{boolean}}"/>`
})
export class AppComponent {
	public string="HELLO WORLD!!!";
	public boolean="true";
}
