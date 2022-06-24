import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public cookie: CookieService, public _router: Router, public activatedRoute: ActivatedRoute,) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var getToken = this.cookie.get('jwtToken');
    var cookiedata = this.cookie.getAll()
    var userdata: any = JSON.parse(cookiedata.user_info)

    if (next.url[0].path == 'login') {
      if (userdata.user_type === 'admin') {
        this._router.navigateByUrl('admin/dashboard');

      }
    }
    return true;
  }

}
