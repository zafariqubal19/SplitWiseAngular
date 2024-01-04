import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { LoginModel } from '/Models/Models';
import { LoginModel } from 'src/app/Models/Models';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:any=FormGroup;
  constructor( private fb:FormBuilder,private route:Router,private user:UserService) { }

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
this.user.Login(loginmodel.EmailId,loginmodel.Password).subscribe((response:any)=>{
  if(response.userId!=0){
    const user=JSON.stringify(response);
    sessionStorage.setItem('user',user)
    this.route.navigate(['/Home'])
  }
  else{
    alert("Incorrect Email or password")
  }
  this.LoginForm.reset();

})


}
}
