import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Clothe } from 'src/types/clothe';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit{

  clothesList: Clothe[] = []
  constructor(private apiService: ApiService){}
  
  
  ngOnInit(): void {
    this.apiService.getClothes().subscribe({
      next: (clothes) => {
        this.clothesList = clothes
      },
      error: (err) => {
        console.error(`Error: ${err}`)
      }
    })
  }
} 
