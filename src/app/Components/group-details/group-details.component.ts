import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Expense } from 'src/app/Models/Models';
import { ExpenseService } from 'src/app/Services/expense.service';
import { MemberService } from 'src/app/Services/member.service';
import { SplitService } from 'src/app/Services/split.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})

export class GroupDetailsComponent implements OnInit {
  GroupMembers:any=[];
  GroupId:number|null;
  AddMembersForm:any=FormGroup;
  IsAddingMember:boolean=false;
  ExpenseAdditionForm:any=FormGroup;
  IsAddingExpense:boolean=false;
  User:any;
  constructor(private split:SplitService ,private route:ActivatedRoute,
    private fb:FormBuilder,private member:MemberService,private expense:ExpenseService) { }

  ngOnInit(): void {
    const userstore=sessionStorage.getItem('user');
    this.User=userstore?JSON.parse(userstore):null
    console.log(this.User)
    let param = this.route.snapshot.paramMap.get('GroupId');
    this.GroupId=parseInt(param!,10)
    console.log(this.GroupId)
    this.split.GetGroupMember(this.GroupId).subscribe((response:any)=>{
      console.log(response)
        response.members.forEach((element:any)=>{
          this.GroupMembers.push({
            Name:element.name,
            Email:element.email,
            MemberId:element.memberId,
            UserId:element.userId,
            TotalAmountSpent:element.totalAmountSpent,
            TotalAmountToGive:element.totalAmountToGive,
            TotalAmountToReceive:element.totalAmountToReceive

          })
         })
      
     
      
        })
        this.AddMembersForm=this.fb.group({
         Email:['',Validators.required] 
        })
        this.ExpenseAdditionForm=this.fb.group({
          Description:['',Validators.required],
          TotalAmount:['',Validators.required]
        })
        
  }
AddMembers(){
  let email=this.AddMembersForm.get('Email')?.value;
  this.member.AddMembers(email,this.GroupId!).subscribe((response:any)=>{
    console.log(response)
  })

}
ShowForm(){
  this.IsAddingMember=true;
  this.IsAddingExpense=false;
}
DeleteMember(memberId:number){
alert(memberId)
}
AddExpense(){
  let Expenses:Expense=new Expense();

Expenses.Description=this.ExpenseAdditionForm.get('Description')?.value;
Expenses.TotalAmount=this.ExpenseAdditionForm.get('TotalAmount')?.value;
Expenses.GroupId=this.GroupId!;
Expenses.UserId=this.User.userId;
Expenses.Spender=this.User.name;
console.log(Expenses)
this.expense.AddExpenses(Expenses).subscribe((response:any)=>{
alert(response)
})

}
ShowExpense(){
  this.IsAddingMember=false;
this.IsAddingExpense=true;
}
onSubmit(){

}
}