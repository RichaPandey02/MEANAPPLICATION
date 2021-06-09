import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';

@Component({
  selector: 'app-deletecontact',
  templateUrl: './deletecontact.component.html',
  styleUrls: ['./deletecontact.component.scss']
})
export class DeletecontactComponent implements OnInit {
firstName:any
  constructor(private data1:ContactserviceService) { }

  ngOnInit(): void {
  }
  deletecontact()
  {
    this.data1.deletecontact(this.firstName)
    .subscribe(data=>{
      console.log(data);
    })
    console.log(this.firstName)
  }

}
