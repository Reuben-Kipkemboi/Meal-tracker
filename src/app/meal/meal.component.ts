import { Component, OnInit } from '@angular/core';
import { Meal } from '../meals';
import { MealService } from '../service/meal.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals: Meal[] = [];
  constructor(private mealService:MealService) { }
 
  ngOnInit(): void{
    this.meals=this.mealService.getMeals(); 
    
  }
  aboveHalf() {
    const caloriesAboveHalf:any[] = [];
    for (let i = 0; i < this.meals.length; i++) {
      if (this.meals[i].calories > 500) {
        caloriesAboveHalf.push(this.meals[i]);
      }
    }
    // console.log(caloriesAboveHalf);
    this.meals= caloriesAboveHalf;
      
   }     
}


