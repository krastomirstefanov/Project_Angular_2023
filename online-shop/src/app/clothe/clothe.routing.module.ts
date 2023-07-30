import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from '../clothes/clothes.component';
import { CartComponent } from './cart/cart.component';
import { CurrentClotheComponent } from './current-clothe/current-clothe.component';
import { AuthActivate } from 'src/guards/auth.activate';



const routes: Routes = [
    {
        path: 'catalog',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ClothesComponent,
            },
            {
                path: ':clotheId',
                component: CurrentClotheComponent
            }
        ]

        
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthActivate]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClotheRoutingModule { }
