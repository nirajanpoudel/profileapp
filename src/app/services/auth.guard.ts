import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import {map,catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.getUser().pipe(map(data=>{
        return true;
      }),
      catchError(err=>{
        this.router.navigate(['/']);
        return of(false);
      }))
  }
}
