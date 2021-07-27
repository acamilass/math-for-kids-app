import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameResolver implements Resolve<any> {
  constructor(private readonly router: Router) { }

  resolve() {

    const nameLocalStorage = window.localStorage.getItem('nome');

    if (nameLocalStorage) {
      this.router.navigate(['continhas']);
    }

    return EMPTY;
  }
}
