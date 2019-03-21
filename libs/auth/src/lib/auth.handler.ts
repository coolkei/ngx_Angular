import { Actions, ofActionErrored, ofActionSuccessful } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Login, LoginSuccess } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthHandler {
  constructor(private actions$: Actions) {
    this.actions$.pipe(ofActionSuccessful(Login)).subscribe(action => console.log('Login........Action Successful'));
    this.actions$.pipe(ofActionErrored(Login)).subscribe(action => console.log('Login........Action Errored'));
  }
}
