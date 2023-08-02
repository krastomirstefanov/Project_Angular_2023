import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any = [];
  public total : number = 0; 

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.product = res;
      this.total = this.cartService.totalPrice();
    })
  }

  removeItem(clothe: any): void{
    this.cartService.removeItem(clothe)
  }

  emptyCart(){
    this.cartService.removeAll();
  }


}
