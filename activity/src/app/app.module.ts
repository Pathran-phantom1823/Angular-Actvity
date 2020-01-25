import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SideBarComponent} from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FormComponent } from './form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import {MatMenuModule} from '@angular/material/menu';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ChildListComponent } from './child-list/child-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ViewComponent } from './view/view.component';
import { ErrorComponent } from './error/error.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    FormComponent,
    ParentComponent,
    ChildComponent,
    SenderComponent,
    ReceiverComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    ParentFormComponent,
    ChildListComponent,
    UserListComponent,
    RegisterFormComponent,
    ViewComponent,
    ErrorComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
