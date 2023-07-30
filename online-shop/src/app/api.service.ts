import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clothe } from 'src/types/clothe';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getClothes() {
    const {appUrl} = environment;
    return this.http.get<Clothe[]>(`${appUrl}/data/clothes`)
  }
}
