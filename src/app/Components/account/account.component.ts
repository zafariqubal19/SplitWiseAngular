import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
user:any;
IsEditable:boolean=true;
UserEditForm:FormGroup=new FormGroup({});
  constructor(private route:ActivatedRoute,private fb:FormBuilder) { }

  ngOnInit(): void {
    const userstore=sessionStorage.getItem('user');
    this.user=userstore?JSON.parse(userstore):null
    this.UserEditForm=new FormGroup({
      Name:new FormControl({}),
      Email:new FormControl(),
      PhoneNumber:new FormControl()

    })
  }
  Edit(){
    this.IsEditable=false;
    this.UserEditForm.controls['Name'].setValue(this.user.name);
    this.UserEditForm.controls['Email'].setValue(this.user.email)
    this.UserEditForm.controls['Email'].disable();
    this.UserEditForm.controls['PhoneNumber'].setValue(this.user.phoneNumber);

  }

}
