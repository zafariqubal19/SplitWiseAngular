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


}