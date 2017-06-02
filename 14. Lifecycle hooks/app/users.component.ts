import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';
@Component({

	selector:'app-users',
	template:`<h2>USERS COMPONENT</h2>
	<h3>Country Of User is {{parentData}}</h3>
	<ul>
<li>Shantanu</li>
<li>Himanshu</li>
<li>Rishabh</li>
<li>Aman</li>
<li>Ujjwal</li>
<li>Arpit</li>
<li>Ankur</li>
<li>Abhineet</li>
<li>Siddhant</li>
<li>Shushant</li>
</ul>`,
inputs:['parentData']
})

export class UsersComponent implements OnInit,OnDestroy,OnChanges {
public parentData:string;
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
