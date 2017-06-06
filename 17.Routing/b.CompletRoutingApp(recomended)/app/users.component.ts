import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({


	template:`<h2>Users Component-List Of Users</h2>

	<ul class="items">
	  <li *ngFor="let user of userArry" (click)="onSubmit(user)">
	    <span class="badge" >{{user.id}}</span>{{user.name}}</li>
	  </ul>
	`
	})

	export class UsersComponent{

constructor(private router:Router,private route:ActivatedRoute){}

	public userArry=[{"id":"1","name":"Himanshu","detail":"Lives in Noida"},
	{"id":"2","name":"Aman","detail":"lives in Hyderabad"},
	{"id":"3","name":"Shantanu","detail":"lives in Delhi"},
	{"id":"4","name":"Ujjwal","detail":"lives in Bhopal"},
 {"id":"5","name":"Rishabh","detail":"lives in Allahabad"}];

	onSubmit(user){
	console.log(user.detail);
//	this.router.navigate(['/usersDetail',user.detail]); //ABSOLUTE PATHING means if path is changed in app-routing module it will not work

this.router.navigate([user.detail],{relativeTo:this.route}); //RELATIVE PATHING..It will just append the present path with user.detail
	 }
	}

//--------------------------------------------------------------------
//For sending optional params you can use {} like->
//this.router.navigate(['/usersDetail',user.detail,{user.id}]);
//here user.id is optional params
//--------------------------------------------------------------------
