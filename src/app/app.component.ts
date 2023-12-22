import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  IsShowNavbar:boolean;

  constructor(private route:Router) {
    this.IsShowNavbar=true;
    route.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.IsShowNavbar=!['/','/Login','/Register'].includes(event.url)
      }
    })
  }
  title = 'SplitWise';
  
}
