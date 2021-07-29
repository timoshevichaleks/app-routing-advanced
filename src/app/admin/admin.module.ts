import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagePhrasesComponent } from './manage-phrases/manage-phrases.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    ManagePhrasesComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
