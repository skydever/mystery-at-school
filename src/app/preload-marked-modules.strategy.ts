import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'; // add the "of" operator to the Observable (or import from 'rxjs' to have it all)

//
// Purpose:
// ========
// CustomPreloadingStrategy to only preload routes with data.preload=true
//

export class PreloadMarkedModulesStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data['preload'] ? load() : Observable.of(null);
    }
}
