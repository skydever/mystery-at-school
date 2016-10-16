import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { LoggerService } from './logger.service';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { throwIfAlreadyLoaded } from './module-import-guard';

//
// Purpose of this module:
// =======================
// Specify app-wide singleton providers or components
// that only exist once in the whole app 
// (like the main navigation component, a LoggerService).
//
// NOTICE:
// Only the root AppModule should import the CoreModule.
//

@NgModule({
    imports: [
        CommonModule,
        HomeModule
    ],
    // exports: [
    //     PageNotFoundComponent
    // ],
    declarations: [
        PageNotFoundComponent
    ] // ,
    // providers: [LoggerService]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
