import { Component, OnInit } from '@angular/core';
import { SplitService } from 'src/app/Services/split.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
Groups:any=[];
  constructor(private split:SplitService ) { }

  ngOnInit(): void {
    this.split.getGroup().subscribe((respnse:any)=>{
      console.log(respnse.groups)
     respnse.groups.forEach((element:any) => {
      this.Groups.push(
        {
          GroupName:element.groupName,
          GroupId:element.groupId
        }
      )
      
     });

    })
  }
  getMemmber(item:any){
    console.log(item)
    this.split.GetGroupMember(item.GroupId).subscribe((response:any)=>{
      console.log(response)
    })
  }

}
