import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
import { ServicesService } from 'src/app/modules/services.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { MapComponent } from 'src/app/modules/map/map.component';


import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [DefaultComponent,
    HomeComponent,
    PostsComponent,
    ContactComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChtfmz-pwgVBmr-ewAxiKQ3DQhMSE_knU'
    })
  ],
  providers: [
    ServicesService,
    
  ],
}

)
export class DefaultModule { }
