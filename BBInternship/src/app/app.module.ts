import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule, MatCheckboxModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import { NavComponent } from './nav/nav.component';
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
