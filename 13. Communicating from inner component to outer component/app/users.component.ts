import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({

	selector:'app-users',
	template:`<h2>USERS COMPONENT</h2>
	<ul>
<li id="1" (click)="onClick(1)">Shantanu</li>
<li id="2" (click)="onClick(2)">Himanshu</li>
<li id="3" (click)="onClick(3)">Rishabh</li>
<li id="4" (click)="onClick(4)">Aman</li>
<li id="5" (click)="onClick(5)">Ujjwal</li>
<li id="6" (click)="onClick(6)">Arpit</li>
<li id="7" (click)="onClick(7)">Ankur</li>
<li id="8" (click)="onClick(8)">Abhineet</li>
<li id="9" (click)="onClick(9)">Siddhant</li>
<li id="0" (click)="onClick(0)">Shushant</li>
</ul>`,
outputs:['userEvent']
})

export class UsersComponent{
userEvent=new EventEmitter<string>();
onClick(id){
this.userEvent.emit(document.getElementById(id).innerHTML);
}
}
