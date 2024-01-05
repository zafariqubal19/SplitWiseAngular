import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from '../Models/Models';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http:HttpClient) { }
AddExpenses(Expenses:Expense){
  let url='https://localhost:7154/api/Expenses/AddExpenes';
return this.http.post(url,Expenses)
}
AllExpenses(GroupId:number){
  let url=`https://localhost:7154/api/Expenses/GetAllExpenses?GroupId=${GroupId}`;
 return this.http.get(url)
}
DeleteExpenses(expensdId:number){
  let url=`https://localhost:7154/api/Expenses/DeleteExpenses?ExpenseId=${expensdId}`
  return this.http.delete(url);
}
AllMyExpenses(UserId:number,GroupId:number){
let url=`https://localhost:7154/api/Expenses/GetAllMyExpenses?UserId=${UserId}&GroupId=${GroupId}`;
return this.http.get(url)
}
SettleExpense(GroupId:number){
  
  let url=`https://localhost:7154/api/Expenses/SettleUp`
  return this.http.put(url,GroupId);
}


}
