import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {UsersComponent}  from './users.component';
import {CustomersComponent} from './customers.component';
import {UsersDetailComponent} from './users.detail.component';
import {PageNotFoundComponent} from './pageNotFound.component';

 const routes:Routes=[
 {path:'' , redirectTo:'/users',pathMatch:'full'},        //pathMatch by default is prefix,which means for every url it will redired to users only
 {path:'users' , component:UsersComponent},
 {path:'customers',component:CustomersComponent},
 {path:'users/:det',component:UsersDetailComponent},
 {path:'**' , component:PageNotFoundComponent}            //when wrong url is given
 ];

 @NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
 })

 export class AppRoutingModule{}
 export const routingComonents=[UsersComponent,CustomersComponent,UsersDetailComponent,PageNotFoundComponent]
