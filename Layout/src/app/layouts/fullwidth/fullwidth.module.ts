import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from 'src/app/modules/components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    
  ]
})
export class FullwidthModule { }
