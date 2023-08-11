import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartListItem: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  };

  setProducts(product: any) {
    this.cartListItem.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any){
    this.cartListItem.push(product);
    this.productList.next(this.cartListItem);
    this.totalPrice();
    console.log(this.productList)
  };

  totalPrice(): number {
    let result = 0;
    this.cartListItem.map((p: any) => {
      result += p.total;
    })
    return result;
  };


  removeItem(p: any){
    this.cartListItem.map((product:any, index: any) => {
        if(product._id === p._id){
          this.cartListItem.splice(index,1)
        }
    })
  }

  removeAll(){
    this.cartListItem = [];
    this.productList.next(this.cartListItem);
  }




}
