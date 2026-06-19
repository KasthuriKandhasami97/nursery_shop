import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
cartCount = new BehaviorSubject<number>(0);
constructor(){
  this.updateCartCount();
}
  getCartItems() {
    return JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
  }

addToCart(plant: any) {

  const items = this.getCartItems();

  const existingPlant = items.find(
    (item:any) => item.id === plant.id
  );

  if(existingPlant){

    existingPlant.quantity++;

  } else {

    items.push({
      ...plant,
      quantity: 1
    });

  }

  localStorage.setItem(
    'cart',
    JSON.stringify(items)
  );

  this.updateCartCount();

}
increaseQuantity(index: number) {

  const items = this.getCartItems();

  items[index].quantity++;

  localStorage.setItem(
    'cart',
    JSON.stringify(items)
  );
}
decreaseQuantity(index: number) {

  const items = this.getCartItems();

  if (items[index].quantity > 1) {
    items[index].quantity--;
  }

  localStorage.setItem(
    'cart',
    JSON.stringify(items)
  );
}
  
getCartCount() {
  return this.getCartItems().length;
}

  removeItem(index: number) {

    const items = this.getCartItems();

    items.splice(index, 1);

    localStorage.setItem(
      'cart',
      JSON.stringify(items)
    );
    this.updateCartCount();
  }
updateCartCount() {

    const count=this.getCartItems().length;
    this.cartCount.next(count);

  }

}