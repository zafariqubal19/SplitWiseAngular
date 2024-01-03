import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SplitService } from 'src/app/Services/split.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
Groups:any=[];
IsCreateGroup:boolean=false;
groupCreationForm:any=FormGroup;
user:any;

IsMemberAvailable:boolean=false;
  constructor(private split:SplitService, private fb:FormBuilder,private router:Router ) { }

  ngOnInit(): void {
    const userstore=sessionStorage.getItem('user');
    this.user=userstore?JSON.parse(userstore):null
    this.split.getGroup(this.user.userId).subscribe((respnse:any)=>{
     respnse.groups.forEach((element:any) => {
      this.Groups.push(
        {
          GroupName:element.groupName,
          GroupId:element.groupId
        }
      )
      
     });

    })
    this.groupCreationForm=this.fb.group({
      GroupName:['',Validators.required ]
    })
  }
  getMemmber(item:any){
    console.log(item)
   this.router.navigate(['/GroupDetails',item.GroupId])

  }
  groupForm(){
    
this.IsCreateGroup=true;
  }

  createGroup(){

    let groupName=this.groupCreationForm.get('GroupName')?.value
    let userId=this.user.userId;
    this.split.CreatGroup(groupName,userId).subscribe((response:any)=>{
      if(response==1){
        alert("Group created")
      }
    })
  }

}
