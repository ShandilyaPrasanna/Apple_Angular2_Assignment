import { Injectable } from '@angular/core';

@Injectable()

export class UsersService{
getusers(){
return [{
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
}}
