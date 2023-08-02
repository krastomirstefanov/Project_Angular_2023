import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/clothe/cart.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public totalItem: number = 0
  constructor(private userService: UserService, private router: Router, private cartService: CartService){}
  
  
  // ngOnInit(): void {
  //   this.cartService.getProducts().subscribe(res => {
  //     this.totalItem = res.length
  //   })
  // }
    
  get isLoggedIn(): boolean {
     return this.userService.isLogged;
  }

  

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/'])
  }
}
