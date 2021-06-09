import { DeletecontactComponent } from './deletecontact/deletecontact.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'getcontact',component:ContactComponent},
  {
  path:'addcontact',component:AddcontactComponent
  },
  {path:'updatecontact',component:UpdatecontactComponent},
  {
    path:'deletecontact',component:DeletecontactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[
  AddcontactComponent,
  UpdatecontactComponent,
  DeletecontactComponent,
  ContactComponent

]
