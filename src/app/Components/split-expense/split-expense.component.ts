import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-split-expense',
  templateUrl: './split-expense.component.html',
  styleUrls: ['./split-expense.component.css']
})
export class SplitExpenseComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  expenseForm:any=FormGroup;
  Users:any=[];
  ngOnInit(): void {
    this.expenseForm=this.fb.group({
      GroupName:[''],
      Amount:[''],
      User:['']
    })
  }
  Adduser(){
    debugger;
    let user=this.expenseForm.get('User')?.value;
    this.Users.push({user:user});
    console.log(this.Users);
  }
}
