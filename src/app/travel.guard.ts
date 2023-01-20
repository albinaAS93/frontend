import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TravelGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(): any {

    const isLogged = localStorage.getItem('isLogged');
    console.log(isLogged);

    if(isLogged == '1'){
      return true;
    } else {
      this.router.navigate(['']);
    }

    return true;
  }

}
