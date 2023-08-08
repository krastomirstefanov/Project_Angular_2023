import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClothesComponent } from './clothes/clothes.component';
import { CurrentClotheComponent } from './clothe/current-clothe/current-clothe.component';
import { CartComponent } from './clothe/cart/cart.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BuyNowComponent } from './buy-now/buy-now.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
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

  },
  {
    path: 'login',
    component: LoginComponent,
   
},
{
    path: 'register',
    component: RegisterComponent,
    
},
{
  path: 'buy-now',
  component: BuyNowComponent
},
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
