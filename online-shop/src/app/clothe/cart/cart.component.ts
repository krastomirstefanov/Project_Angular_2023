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
      
      this.product.forEach((element : any) => {
        Object.assign(element, { quantity: 1, total: element.price});
      });
    })
  }

  removeItem(clothe: any): void{
    this.cartService.removeItem(clothe)
  }

  emptyCart(){
    this.cartService.removeAll();
  }

  increaseQuantity(clothe:any) {
    clothe.quantity++;
    this.calculateTotal(clothe.price);
  }

  decreaseQuantity(clothe: any){
    if(clothe.quantity > 1){
      clothe.quantity--;
    }

    this.calculateTotal(clothe.price);
  }

  calculateTotal(p : any){
    p.total = p.quantity * p.price;
    this.total = p.total;
  }
 
}
