import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

//
// Purpose of this module:
// =======================
// This is the root module used for bootstrapping the app.
//

export const firebaseConfig = {
  apiKey: 'AIzaSyAjw6qTzo9_a7StONdOaYMTOzhcRcgygfo',
  authDomain: 'mystery-at-school.firebaseapp.com',
  databaseURL: 'https://mystery-at-school.firebaseio.com',
  storageBucket: 'mystery-at-school.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    MaterialModule.forRoot(),
    CoreModule,
    // AppRountingModule has to be the last imported module
    // to get the route '**' (PageNotFound) to work as expected 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
