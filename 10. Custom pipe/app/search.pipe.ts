import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
	name:'search'
})

export class SearchPipe implements PipeTransform{
	transform(users:any,value:any):any{
	if(value===undefined)
	{
		return users;
	}

	console.log(users,value);
	return(users.filter(function(user){
		return(user.name.toLowerCase().includes(value.toLowerCase()));
	}));}}
