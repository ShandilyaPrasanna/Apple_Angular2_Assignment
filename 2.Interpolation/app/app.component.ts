import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<p>{{string}}</p>
             <p>Hello Welcome to {{string}}</p>
             <p>{{fun()}}</p>
             <p>HARD Coded String and {{fun()}}</p>
             <h1>{{title}}</h1>
             `
})
export class AppComponent { 
public string="Angular2 Assignment";
public title="HEADING";
fun(){
	return "VALUE RETURNED FROM METHOD";
}

}
