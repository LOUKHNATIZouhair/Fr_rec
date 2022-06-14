import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "../modules/navbar/navbar.component";
import { SidebarComponent } from '../modules/sidebar/sidebar.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { AccessButtComponent } from '../modules/access-butt/access-butt.component';

import { ReclamationComponent } from '../modules/reclamation/reclamation.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    AccessButtComponent,

    ReclamationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
