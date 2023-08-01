import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clothe } from 'src/types/clothe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  message: string | null = null;

  constructor(private http: HttpClient) { }

  getClothes() {
    const {appUrl} = environment;
    return this.http.get<Clothe[]>(`${appUrl}/data/clothes`)
  }

  getClothe(id:string) {
    const {appUrl} = environment;
    return this.http.get<Clothe>(`${appUrl}/data/clothes/${id}`)
  }


  clearSessionData(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userId');
    localStorage.removeItem('');
  }

  dataSave(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  showMessage(text: string) {
    this.message = text;
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }
}
