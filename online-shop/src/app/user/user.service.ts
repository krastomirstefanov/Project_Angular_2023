import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/types/user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  isLoggedIn: boolean = false;

  get isLogged(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  constructor(private http: HttpClient) { 
    try {
      const lsUser = localStorage.getItem('accessToken') || '';
      this.user = JSON.parse(lsUser)
    } catch (err) {
      this.user = undefined;
    }
  }

  login(email: string, password: string): Observable<any> {
    const {appUrl} = environment;
    return this.http.post(`${appUrl}/users/login`, { email: email, password: password });
  }

  register(username: string, email: string, password: string): Observable<any>{
    const {appUrl} = environment;
    return this.http.post(`${appUrl}/users/register`,{
      email: email,
      password: password,
      username: username,
    })
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem('accessToken')
  }
}
