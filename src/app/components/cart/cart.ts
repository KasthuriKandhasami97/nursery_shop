import { Component } from '@angular/core';
import { CartService } from '../../services/cart';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone:true,
  imports:[CommonModule,RouterLink],
  templateUrl: './cart.html'
})
export class Cart {

  cartItems: any[] = [];

  constructor(
    private location:Location,
    private cartService: CartService
  ) {}

  ngOnInit() {

    this.cartItems =
      this.cartService.getCartItems();
  }
  increaseQty(index:number){

  this.cartItems[index].quantity++;

  localStorage.setItem(
    'cart',
    JSON.stringify(this.cartItems)
  );

}
decreaseQty(index:number){

  if(this.cartItems[index].quantity > 1){

    this.cartItems[index].quantity--;

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

  }

}
  removeItem(index:number){

  this.cartService
      .removeItem(index);

  this.cartItems =
      this.cartService
      .getCartItems();
}
getTotal() {

  return this.cartItems
    .reduce(
      (total,item)=>
      total + (item.price * item.quantity),
      0
    );

}
  goBack(){
    this.location.back();
  }

}