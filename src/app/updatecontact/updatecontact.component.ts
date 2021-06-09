import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';

@Component({
  selector: 'app-updatecontact',
  templateUrl: './updatecontact.component.html',
  styleUrls: ['./updatecontact.component.scss']
})
export class UpdatecontactComponent implements OnInit {
firstName:any
lastName:any
phone:any
  constructor(private data1:ContactserviceService) { }

  ngOnInit(): void {
  }
  updatecontact()
  {
    const updatedetails={
      firstName:this.firstName,
      lastName:this.lastName,
      phone:this.phone
    }
    this.data1.updatecontact(updatedetails)
    .subscribe(data=>{
      console.log(data);
    })
  }

}
