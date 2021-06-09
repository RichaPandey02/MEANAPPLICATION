import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.scss']
})
export class AddcontactComponent implements OnInit {
firstName:any
lastName:any
phone:any
data:any
  constructor(private data1:ContactserviceService) { }

  ngOnInit(): void {
  }
  addcontact()
  {
    const contact={
      firstName:this.firstName,
      lastName:this.lastName,
      phone:this.phone
    }
    this.data1.addContact(contact)
    // .
    .subscribe(data2=>{
      this.data.push(data2)
      this.data1.getContact()
      .subscribe(data2=>{
        this.data=data2
      })


      console.log("jh");
    })
    alert("details added successfully...")
  }

}
