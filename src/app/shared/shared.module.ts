import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { MysteryEditComponent } from './mystery/mystery-edit/mystery-edit.component';
import { QuestionEditComponent } from './mystery/question-edit/question-edit.component';

//
// Purpose of this module:
// =======================
//
// This SharedModule exists to make commonly used components, 
// directives and pipes available for use in the templates 
// of components in many other modules.
//
// NOTICE:
// Do not specify app-wide singleton providers in a shared module. 
// A lazy loaded module that imports that shared module will make 
// its own copy of the service.
//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    MysteryEditComponent,
    QuestionEditComponent
  ],
  //   providers: [FilterTextService],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    // shared components
    MysteryEditComponent,
    QuestionEditComponent
  ]
})
export class SharedModule { }
