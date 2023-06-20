import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserPaneComponent } from './user-pane/user-pane.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RegisterComponent } from './register/register.component';
import { UserpaneWsComponent } from './userpane-ws/userpane-ws.component';

const routes: Routes = [
  { path: 'viewcontact/:id',
  component: ViewContactComponent,outlet:'dyna'},
  {
    path: '',
    component: UserPaneComponent,
  },
  {
    path:'',
    component: UserpaneWsComponent,outlet:'cyna'
  },
  {
    path:'login',
    component:LoginComponent,outlet:'cyna'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'register',
    component: RegisterComponent,outlet:'cyna'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  
  {
    path: 'editcontact/:id',
    component: EditContactComponent,outlet:'dyna'
  },
  {
    path:'addcontact',
    component:AddContactComponent,outlet:'dyna'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
