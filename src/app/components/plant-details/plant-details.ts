import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlantService } from '../../services/plant';
import { Location,CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-plant-details',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './plant-details.html',
  styleUrl: './plant-details.css',
})
export class PlantDetails {
  plant:any;

  constructor(
    private location:Location,
    private route: ActivatedRoute,
    private plantService: PlantService,
    private cartService:CartService
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.plant = this.plantService
      .getPlants()
      .find((p:any) => p.id == id);
  }
  addToCart(plant: any) {

    this.cartService.addToCart(plant);

    alert('Plant Added To Cart');
  }
  goBack(){
    this.location.back();
  }
}
