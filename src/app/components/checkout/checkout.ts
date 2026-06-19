import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  name = '';
  phone = '';
  address = '';

  cartItems:any[] = [];

  constructor(
    private cartService: CartService,
    private location: Location,
    private router:Router
  ) {}

  ngOnInit() {

    this.cartItems =
      this.cartService.getCartItems();

  }
goBack() {
  this.location.back();
}
  getTotal() {

    return this.cartItems.reduce(
      (total,item) =>
      total + (item.price * item.quantity),
      0
    );

  }

  placeOrder() {

    if(
      !this.name ||
      !this.phone ||
      !this.address
    ) {

      alert('Please fill all fields');

      return;
    }

    alert(
      'Order Placed Successfully 🌱'
    );
    this.router.navigate(['/'])

    localStorage.removeItem('cart');

    this.cartItems = [];

    this.name = '';
    this.phone = '';
    this.address = '';

    this.cartService.updateCartCount();

  }

}