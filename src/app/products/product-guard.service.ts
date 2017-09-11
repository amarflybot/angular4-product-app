import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log('In ProductGuardService canActivate method.');
        console.log('ActivatedRouteSnapshot: ' + route);
        console.log('RouterStateSnapshot: ' + state);
        const id = +route.url[1].path;
        if ( isNaN(id) || id < 0) {
            console.log('Invalid ID: ' + id);
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }

}
