import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class PreloadMarkedModules implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        return route.data['preload'] ? load() : null; // dev(train): what is this? original code instead of "null" => of(null);
    }
}
