import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable,BehaviorSubject } from 'rxjs';
import { UserData } from './user.data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  currentUser= new BehaviorSubject(null);
  constructor(private _httpClient:HttpClient,private _route:Router) {
    if(localStorage.getItem('userData')!=null){
       let user= JSON.parse(localStorage['userData']);
       this.currentUser.next(user);
   }
   else{
     _route.navigate(['/login']);
   }
  }
  register(registerData:object):Observable<any>{
    return this._httpClient.post("https://routeegypt.herokuapp.com/signup",registerData);
  }
  login(loginData:object):Observable<any>{
    return this._httpClient.post("https://routeegypt.herokuapp.com/signin",loginData);
  }
  getAllUsers():Observable<any>{
    return this._httpClient.get("https://routeegypt.herokuapp.com/getAllUsers");
  }
  saveCurrentUser(first_name:string,last_name:string,email:string,token:string):void{
    let user:any= new UserData(first_name,last_name,email,token);
    this.currentUser.next(user);
    localStorage.setItem("userData",JSON.stringify(user)); 
  }
  logOut():void{
    this.currentUser.next(null);
    localStorage.removeItem("userData");
    this._route.navigate(['/login']);
  }
}