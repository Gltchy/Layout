import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './modules/components/login/login.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/acceuil',
    pathMatch: 'full'
  },
  {
  path: '',
  component:  DefaultComponent,
  children: [{
    path: 'acceuil',
    component:  HomeComponent,
  },
  {
    path: 'eval',
    component:  PostsComponent
  },
  {
    path: 'contact',
    component:  ContactComponent,
  }
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
