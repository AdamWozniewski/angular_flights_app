import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: MatSnackBar,
    ) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.authState$.pipe(map(state => {
          if (state !== null) {
            return true;
          }
          this.router.navigate(['/login']);
          this.toast.open('Błąd logowania');
          return false;
          }
        )
      );
    }
}
