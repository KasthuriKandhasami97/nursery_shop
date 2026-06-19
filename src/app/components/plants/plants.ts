import { Component } from '@angular/core';
import { PlantService } from '../../services/plant';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-plants',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './plants.html',
  styleUrl: './plants.css',
})
export class Plants {

  plants:any[] = [];
  filteredPlants:any[] = [];

  searchText = '';
  selectedCategory = '';

  constructor(
    private plantService: PlantService,
    private cartService: CartService
  ) {}

  ngOnInit() {

    this.plants =
      this.plantService.getPlants();

    this.filteredPlants =
      this.plants;
  }

  applyFilters() {

    this.filteredPlants =
      this.plants.filter(plant => {

        const searchMatch =
          plant.name.toLowerCase()
          .includes(
            this.searchText.toLowerCase()
          );

        const categoryMatch =
          !this.selectedCategory ||
          plant.category === this.selectedCategory;

        return searchMatch &&
               categoryMatch;
      });

  }

  searchPlant() {
    this.applyFilters();
  }

  filterCategory(event:any) {

    this.selectedCategory =
      event.target.value;

    this.applyFilters();
  }

  addToCart(plant:any) {

    this.cartService.addToCart(plant);

    alert('Plant Added To Cart');
  }
}
