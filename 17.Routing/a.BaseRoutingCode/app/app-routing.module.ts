import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {UsersComponent}  from './users.component';
import {CustomersComponent} from './customers.component';

 const routes:Routes=[
 {path:'users' , component:UsersComponent},
 {path:'customers',component:CustomersComponent}
 ];

 @NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
 })

 export class AppRoutingModule{}
 export const routingComonents=[UsersComponent,CustomersComponent]
