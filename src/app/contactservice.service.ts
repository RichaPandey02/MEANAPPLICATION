import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  // data2:any
  // push(data2:any)
  // {
  //   throw new Error('method not implemented')
  // }

  constructor(private http:HttpClient) { }
  getContact()
  {
    return this.http.get('http://localhost:8000/api/contacts')
  }
  addContact(contact:any)
  {
    return this.http.post('http://localhost:8000/api/contacts',contact);
  }
  updatecontact(details:any)
  {
    return this.http.patch('http://localhost:8000/api/contacts/'+details.firstName,details)
  }
  deletecontact(firstname:any)
  {
    return this.http.delete<any>(`http://localhost:8000/api/contacts/${firstname}`)
  }
}
