import { CommonModule } from '@angular/common';
import { Component , HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart';
import { count } from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  cartCount = 0;
isScrolled = false;
  constructor(
    private cartService: CartService
  ) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {

    this.isScrolled = window.scrollY > 50;

  }
  ngOnInit() {
    this.loadCartCount();
    this.cartService.cartCount.subscribe(count=>{
      this.cartCount=count;
    });
  }

  loadCartCount() {
    this.cartCount =
      this.cartService.getCartCount();
  }

}
