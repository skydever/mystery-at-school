import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PreloadMarkedModulesStrategy } from './preload-marked-modules.strategy';

//
// Purpose of this module:
// =======================
// App routing, lazy loading, preloading ...
//

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // {
    //     path: 'settings',
    //     // lazy loading
    //     loadChildren: 'app/core/user-settings/user-settings.module#UserSettingsModule',
    //     // preloading with CustomPreloadingStrategy: preload routes with data.preload=true
    //     data: { preload: true }
    // },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadMarkedModulesStrategy
    })],
    providers: [
        PreloadMarkedModulesStrategy
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
