import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const appRutes = [
  {
  path : "users",
  component : UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    RouterModule.forRoot(appRutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
