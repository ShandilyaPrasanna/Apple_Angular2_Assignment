
import {Component} from '@angular/core';
@Component({

selector:'app-users',
template:`<h2>Users Component-List Of Users</h2>
<div *ngIf="userArry.length>0">
<tr>
    <th>Name</th>
    <th>Location</th>
  </tr>
  <tr *ngFor="let user of userArry">
    <td>{{user.name}}   </td>
    <td>{{user.location}}</td>
  </tr>
  <tr>
  </div>
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
