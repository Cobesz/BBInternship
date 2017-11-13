import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import { NavComponent } from './nav/nav.component';
import {AppRoutingModule} from "./app-routing.module";
import { CriteriaOverviewComponent } from './criteria-overview/criteria-overview.component';
import { CriteriaDetailComponent } from './criteria-detail/criteria-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CriteriaOverviewComponent,
    CriteriaDetailComponent
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
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
