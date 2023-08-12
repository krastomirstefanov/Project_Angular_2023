import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';
import { Clothe } from 'src/types/clothe';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-current-clothe',
    templateUrl: './current-clothe.component.html',
    styleUrls: ['./current-clothe.component.css']
})
export class CurrentClotheComponent implements OnInit {

    clothe: Clothe | undefined;
    addingToCart!: boolean;


    constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private userService: UserService, private cartService: CartService) { }


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

    addToCart(clothe:any){
        this.cartService.addToCart(clothe);
        this.addingToCart = true;

        setTimeout(()=> {
            this.addingToCart = false;
        }, 900);
    }

}
