import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { LoginModel } from '/Models/Models';
import { LoginModel } from 'src/app/Models/Models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:any=FormGroup;
  constructor( private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {

this.LoginForm=this.fb.group({
Email:['',[Validators.required]],
Password:['',[Validators.required]]
})
  }
Login(formData:FormGroup){
let loginmodel:LoginModel=new LoginModel();
loginmodel.EmailId=formData.get('Email')?.value;
loginmodel.Password=formData.get('Password')?.value;
debugger;
if(loginmodel.EmailId=="zafar@gmail.com" && loginmodel.Password=="zafar"){
this.route.navigate(['/Home'])
}
else{
  this.route.navigate(['/Login'])
}
}
}
