import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FlexLayoutModule,
    InputTextModule,
    DropdownModule,
    ButtonModule
  ]
})
export class SharedModule { }
