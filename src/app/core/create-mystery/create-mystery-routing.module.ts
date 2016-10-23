import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CreateMysteryComponent } from './create-mystery.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: CreateMysteryComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CreateMysteryRoutingModule { }
