import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';

// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import {SidebarModule} from 'primeng/sidebar';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    WelcomeRoutingModule,
    ButtonModule,
    AccordionModule,
    ToastModule
  ]
})
export class WelcomeModule { }
