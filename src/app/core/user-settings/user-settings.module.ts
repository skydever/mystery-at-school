import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { UserSettingsComponent } from './user-settings.component';
import { UserSettingsRoutingModule } from './user-settings-routing.module';

//
// Purpose of this module:
// =======================
// Configure user specific settings
//

@NgModule({
  imports: [
    SharedModule,
    UserSettingsRoutingModule
  ],
  declarations: [UserSettingsComponent]
})
export class UserSettingsModule { }
