import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { UserPaneComponent } from './user-pane/user-pane.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RegisterComponent } from './register/register.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UserpaneWsComponent } from './userpane-ws/userpane-ws.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';  
import {MatRippleModule} from '@angular/material/core';
import { SplahScreenComponent } from './splah-screen/splah-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    AllContactsComponent,
    DynamicComponent,
    UserPaneComponent,
    ViewContactComponent,
    EditContactComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    AddContactComponent,
    RegisterComponent,
    FilterPipe,
    UserpaneWsComponent,
    SplahScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
