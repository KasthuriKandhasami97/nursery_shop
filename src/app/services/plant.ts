import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  plants = [
    {
      id: 1,
      name: 'Money Plant',
      price: 299,
      image: 'assets/images/money-plant.jpg',
      category: 'Indoor',
      description: 'Easy maintenance indoor plant'
    },
    {
      id: 2,
      name: 'Rose Plant',
      price: 199,
      image: 'assets/images/rose.jpg',
      category: 'Flower',
      description: 'Beautiful flowering plant'
    },
    {
      id: 3,
      name: 'Snake Plant',
      price: 399,
      image: 'assets/images/snake.jpg',
      category: 'Indoor',
      description: 'Air purifier plant'
    }
  ];

  getPlants() {
    return this.plants;
  }
}