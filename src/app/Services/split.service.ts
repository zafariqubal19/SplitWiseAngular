import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  constructor(private http:HttpClient) { }
  getGroup():Observable<any>{
    return this.http.get('');
  }
  CreatGroup(data:any):Observable<any>{
    return this.http.post('',data);
  }
  RegisterUser(UserData:any):Observable<any>{

    const url='https://localhost:7154/api/Split/RegisterUser';
    return this.http.post(url,UserData);
  }
}
