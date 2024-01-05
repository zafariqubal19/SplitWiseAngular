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
  IsShowExpense:boolean=false;
  AllExpenseDetails:any=[];
  UserName:string;
  CreatorId:number|null;
  IsCreator:boolean=false;
  MyAllExpenses:any=[];
  IsMyExpenses:boolean=false;
  AllMyExpenses:any=[];
  
  constructor(private split:SplitService ,private route:ActivatedRoute,
    private fb:FormBuilder,private member:MemberService,private expense:ExpenseService) { }

  ngOnInit(): void {
    const userstore=sessionStorage.getItem('user');
    this.User=userstore?JSON.parse(userstore):null
    this.UserName=this.User.name;
    let paramGroupId = this.route.snapshot.paramMap.get('GroupId');
    let paramCreatorId=this.route.snapshot.paramMap.get('CreatorId');
    this.GroupId=parseInt(paramGroupId!,10);
    this.CreatorId=parseInt(paramCreatorId!,10);
    if(this.CreatorId==this.User.userId){
      this.IsCreator=true;
    }

    console.log(this.GroupId,this.CreatorId)
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
this.AddMembersForm.reset();
}
ShowForm(){
  this.IsAddingMember=true;
  this.IsAddingExpense=false;
}
DeleteMember(members:any){
this.member.DeleteMember(this.GroupId!,members.UserId).subscribe((response:any)=>{
  if(response>0){
    alert("Member Deleted")
  }
})
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
this.ExpenseAdditionForm.reset();

}
ShowExpenseForm(){
  this.IsAddingMember=false;
this.IsAddingExpense=true;
this.IsShowExpense=false;
this.IsMyExpenses=false;
}
AllExpenses(){
  this.expense.AllExpenses(this.GroupId!).subscribe((response:any)=>{
    console.log(response)
    if(this.AllExpenseDetails.length==0){
    response.forEach((e:any)=>{
      this.AllExpenseDetails.push({
        ExpenseId:e.expenseId,
        GroupId:e.groupId,
        UserId:e.userId,
        Description:e.description,
        Spender:e.spender,
        TotalAmount:e.totalAmount
      })
    })
  }
  })
this.IsShowExpense=true;
this.IsAddingMember=false;
this.IsAddingExpense=false;
}
DeleteExpense(expenseId:number){
this.expense.DeleteExpenses(expenseId).subscribe((response:any)=>{
  if(response>0){
    alert("Expense Deleted");
  }
})
}
MyExpenses(){
  this.expense.AllMyExpenses(this.User.userId,this.GroupId!).subscribe((response:any)=>{
    if(response.length!=0){
      if(this.AllMyExpenses.length==0){
        response.forEach((e:any)=>{
          this.AllMyExpenses.push({
            ExpenseId:e.expenseId,
          GroupId:e.groupId,
          UserId:e.userId,
          Description:e.description,
          Spender:e.spender,
          TotalAmount:e.totalAmount
          })
     })
      }
    }
    else{
      alert("No")
    }
 
   
  })
  this.IsMyExpenses=true;
}
SettleExpense(){
  this.expense.SettleExpense(this.GroupId!).subscribe((response:any)=>{
    if(response>0){
      alert("Your have been Settled");
    }
    else{
      alert("Something went wrong")
    }
  })
}
}
