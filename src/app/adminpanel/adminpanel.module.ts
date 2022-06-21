import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpanelRoutingModule } from './adminpanel-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [
    AdmindashboardComponent
  ],
  imports: [
    CommonModule,
    AdminpanelRoutingModule
  ]
})
export class AdminpanelModule { }
