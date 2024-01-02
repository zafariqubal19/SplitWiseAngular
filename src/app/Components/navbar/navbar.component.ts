import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
Profile:any=FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
Group(){
  this.router.navigate(['/Group']);
}
}
