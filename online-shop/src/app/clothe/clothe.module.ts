import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CurrentClotheComponent } from './current-clothe/current-clothe.component';
import { ClotheRoutingModule } from './clothe.routing.module';



@NgModule({
  declarations: [
    CartComponent,
    CurrentClotheComponent
  ],
  imports: [
    CommonModule,
    ClotheRoutingModule
  ]
})
export class ClotheModule { }
