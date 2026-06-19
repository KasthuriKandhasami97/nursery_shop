import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PlantService } from '../../services/plant';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  plants:any[]=[];
  visiblePlants = 4;
 constructor(private plantService:PlantService){
 }
 
  ngOnInit() {
    this.plants = this.plantService.getPlants();
  }
loadMore() {
  this.visiblePlants += 4;
}
}
