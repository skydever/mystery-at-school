import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { PreloadMarkedModules } from './preload-marked-modules.strategy';

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
    {
        // dev(train): lazy loading and preloading
        path: 'settings',
        loadChildren: 'app/core/user-settings/user-settings.module#UserSettingsModule',
        data: {
            preload: true // false
        }
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadMarkedModules // PreloadAllModules
    })],
    providers: [
        PreloadMarkedModules
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
