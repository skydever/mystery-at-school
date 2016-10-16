import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

//
// Purpose of this module:
// =======================
// The home page
//

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
