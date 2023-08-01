import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Clothe } from 'src/types/clothe';

@Component({
  selector: 'app-current-clothe',
  templateUrl: './current-clothe.component.html',
  styleUrls: ['./current-clothe.component.css']
})
export class CurrentClotheComponent implements OnInit {

  clothe: Clothe | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService:UserService){}

   
  get isLoggedIn(): boolean {
    return this.userService.isLogged;
 }


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
