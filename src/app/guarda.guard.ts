import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { constants } from 'buffer';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GuardaGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router){

  }
  flag:boolean = false;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const Login = this.cookieService.get('login');
    const Pwd = this.cookieService.get('password');

    if(Login == "alex" && Pwd == "123"){
      this.flag = true;
    }else{
      this.router.navigate(['/']);
    }

    return this.flag;
  }
  
}
