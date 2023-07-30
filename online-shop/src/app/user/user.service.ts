import { Injectable } from '@angular/core';
import { User } from 'src/types/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (err) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'pesho@abv.bg',
      password: '1234'
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
