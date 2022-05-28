import { Injectable } from '@angular/core';
import { User } from '../models/user2.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkLogin() {
    let strUser = localStorage.getItem('useradmin');
    if (strUser) {
      let user = <User>JSON.parse(strUser);
      return this.verifyLogin(user);
    }
    return false;
  }

  verifyLogin(user: User) {
    if (user.user == 'admin' && user.pass == '123') {
      return true;
    }
    return false;
  }

  doLogin(user: User) {
    if (this.verifyLogin(user)) {
      localStorage.setItem('useradmin', JSON.stringify(user));
      return true;
    }
    return false;
  }

}
