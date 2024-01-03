import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
  AddMembers(email:string,GroupId:number){
    debugger
    let data={
      Email:email,
      GroupId:GroupId
    }
    let url='https://localhost:7154/api/Split/AddMembers'
    return this.http.post(url,data)
  }
  DeleteMember(GroupId:number,UserId:number){
    let url=`https://localhost:7154/api/Split/DeleteMember?groupId=${GroupId}&userId=${UserId}`
    return this.http.delete(url);
  }
}
