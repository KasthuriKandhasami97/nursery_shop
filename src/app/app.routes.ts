import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Plants } from './components/plants/plants';
import { Login } from './components/login/login';
import { Cart } from './components/cart/cart';
import { PlantDetails } from './components/plant-details/plant-details';
import { Checkout } from './components/checkout/checkout';


export const routes: Routes = [
     { 
      path: '',component: Home
     },

  {
    path: 'plants',
    component: Plants
  },
  {
path:'plants/:id', component:PlantDetails
  },
{
  path: 'checkout',
  component: Checkout
},

  {
    path: 'cart',
    component: Cart
  },
  {
    path:'login',
    component:Login
  }
];
