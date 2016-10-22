import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { CreateMysteryComponent } from './create-mystery.component';
import { CreateMysteryRoutingModule } from './create-mystery-routing.module';

//
// Purpose of this module:
// =======================
// Create mysteries
//

@NgModule({
  imports: [
    SharedModule,
    CreateMysteryRoutingModule
  ],
  declarations: [CreateMysteryComponent]
})
export class CreateMysteryModule { }
