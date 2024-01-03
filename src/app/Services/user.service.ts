import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  Login(Email:string,Password:string){
    let url=`https://localhost:7154/api/User/Login?username=${Email}&password=${Password}`
    return this.http.get(url);
  }
}
