import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private tokenService: AuthService,
    private authService: AuthService,
    private routerService: RouterService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated()) {
      for (let i = 0; i < this.tokenService.getUserRolesWithJWT().length; i++) {
        const role = this.tokenService.getUserRolesWithJWT()[i];
        if (role == 'Admin' || role == 'Moderatör') {
          return true;
        }
      }
    }

    this.routerService.pageNotFoundRoute();
    return false;
  }
}