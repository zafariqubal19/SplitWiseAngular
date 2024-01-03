import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SplitService {

  constructor(private http:HttpClient) { }
  getGroup(UserId:number):Observable<any>{
    return this.http.get(`https://localhost:7154/api/Split/GetUsersGroups?UserId=${UserId}`);
  }
  CreatGroup(groupName:string,UserId:number):Observable<any>{
    const data={
        groupName:groupName,
        UserId:UserId
    }
    let url=`https://localhost:7154/api/Split/CreateGroup`
    return this.http.post(url,data);
  }
  RegisterUser(UserData:any):Observable<any>{

    const url='https://localhost:7154/api/Split/RegisterUser';
    return this.http.post(url,UserData);
  }
  GetGroupMember(groupId:any){
    let url='https://localhost:7154/api/Split/GetGroupDetails?groupdId='+groupId;
   return this.http.get(url)
  }
}
