import { Injectable } from '@angular/core';
import { Meal } from '../meals';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  meals: Meal[] = [
    new Meal('ugali + Nyama', 200, 'African Flour and beef stew'),
    new Meal('Rice + Beef stew', 600, 'Rice combined with stew'),
    new Meal('ugali + Eggs', 700, 'lorem  Ipsum'),
    new Meal('Chips+ Kuku', 400, 'lorem Ipsum'),
  ];

  constructor() {}

  getMeals() {
    return this.meals;
  }
  addMeal(meal: Meal) {
    this.meals.unshift(meal);
  }

  aboveHalf(meal: Meal) {
    this.meals.filter( (meal) => {
      return meal.calories > 500;
      
      // if(calories >= 500){
      //   return true;
      // }
      
    });
    console.log(Meal);
    
  }
}
