import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  current_user!: string;
  constructor(private authService: AuthService, private router: Router) { 
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isAuthenticate && this.authService.profil == "ADMIN") {
      return true;
    } 
    else if(this.current_user == "ADMIN") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
