
import {Component,OnInit} from '@angular/core';
import { UsersService } from './users.service';
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
public userArry=[];
constructor(private _usersService:UsersService){};
ngOnInit(){
console.log('onit called');
this.userArry=this._usersService.getusers();
}

}
