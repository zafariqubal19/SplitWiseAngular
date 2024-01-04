import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Profile:any=FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }
  selectedOption:string='';
  user:any;
  ngOnInit(): void {
    const userstore=sessionStorage.getItem('user');
    this.user=userstore?JSON.parse(userstore):null
    
  }
Group(){
  this.router.navigate(['/Group']);
}
onDropDownChange(){
  if(this.selectedOption=='Account'){
    this.router.navigate(['/Account'])
  }
  else if(this.selectedOption=="CreateGroup"){
    this.router.navigate(['/Group'])
  }
  else if(this.selectedOption=='Logout'){
    this.router.navigate(['/Login'])
  }
}
}
