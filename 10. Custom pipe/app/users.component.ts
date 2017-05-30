
import {Component} from '@angular/core';
@Component({

selector:'app-users',
template:`<h2>Users Component-List Of Users</h2>
<input placeholder="Enter User to Search" [(ngModel)]="value"/>
<div *ngIf="userArry.length>0">
<tr>
    <th>Name</th>
    <th>Location</th>
  </tr>
  <tr *ngFor="let user of userArry | search:value">
    <td>{{user.name | uppercase}}</td>
    <td>{{user.location | lowercase}}</td>
  </tr>
  <tr>
  </div>
  <h2>{{string |slice:'2':'6'}}</h2>
  <h2>{{num | number:'3.4-4'}}</h2>
  <h2>Currency:- {{curr | currency:'USD':true}}</h2>
  `
})

export class UsersComponent{
public userArry=[{
"id":"1",
"name":"Himanshu",
"location":"Noida"
},
{
"id":"2",
"name":"Aman",
"location":"Hyderabad"
},
{
"id":"3",
"name":"Shantanu",
"location":"Delhi"
}];

}
