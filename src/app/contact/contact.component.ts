import { ContactserviceService } from './../contactservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
data:any
  constructor(private data1:ContactserviceService) { }

  ngOnInit(): void {

  }
  // getcontact()
  // {
  //   this.service.getContact().subscribe(data=>{
  //     console.log(data);
  //     this.data=data
  //   })
  // }
  getcontact()
  {
    this.data1.getContact().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }

}
