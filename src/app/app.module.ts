import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';
import {MaterialModule} from "./material/material.module";
import {CoreModule} from "./core/core.module";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {FlightsModule} from "./flights/flights.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireAuthModule} from "@angular/fire/auth";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    AngularFireAuthModule,
    CoreModule,
    AngularFireDatabaseModule,
    FlightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
