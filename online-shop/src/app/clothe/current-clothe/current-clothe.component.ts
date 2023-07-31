import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Clothe } from 'src/types/clothe';

@Component({
  selector: 'app-current-clothe',
  templateUrl: './current-clothe.component.html',
  styleUrls: ['./current-clothe.component.css']
})
export class CurrentClotheComponent implements OnInit {

  clothe: Clothe | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute){}


  ngOnInit(): void {
    this.fetchTheme()
  }


  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['clotheId'];
    this.apiService.getClothe(id).subscribe(clothe => {
      this.clothe = clothe
    })
  }
}
