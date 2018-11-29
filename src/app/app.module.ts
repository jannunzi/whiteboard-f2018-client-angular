import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import {UserService} from "./services/user.service.client";
import {CourseServcieClient} from "./services/course.servcie.client";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserService,
    CourseServcieClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
