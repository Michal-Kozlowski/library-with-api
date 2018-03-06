import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataService } from './data/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    WelcomeComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }