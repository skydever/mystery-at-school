import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserSettingsComponent } from './user-settings.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: UserSettingsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class UserSettingsRoutingModule { }
