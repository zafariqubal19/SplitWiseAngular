import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { RegistrationModel } from 'src/app/Models/Models';
import { SplitService } from 'src/app/Services/split.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisrationForm:any=FormGroup;
  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.RegisrationForm=this.fb.group({
      Name:['',Validators.required],
      Email:['',Validators.required],
      PhoneNumber:['',Validators.required],
      Password:['',Validators.required]
    })
  }
  Register(){
    
    let RegForm:RegistrationModel=new RegistrationModel();
    RegForm.Email=this.RegisrationForm.get('Email')?.value;
    RegForm.Name=this.RegisrationForm.get('Name')?.value;
    RegForm.PhoneNumber=this.RegisrationForm.get('PhoneNumber')?.value;
    RegForm.Password=this.RegisrationForm.get('Password')?.value;
  
    this.user.RegisterUser(RegForm).subscribe((response:any)=>{
      debugger;
      if(response!=null){
        alert("User Registered");
      }
    })
    this.RegisrationForm.reset();
  }
  emptyForm(){

  }

}
