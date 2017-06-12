import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class UsersService{
private _url="app/apidata/usersData.json";
constructor(private _http:Http){};
getusers(){
return this._http.get(this._url)
       .map((responce:Response)=>responce.json())
        .catch(this.errorHandler);
}
errorHandler(error){
console.log("ERROR OCCOURED",error);
return Observable.throw(error|| "SERVER ERROR");
}
}
