import { Injectable } from '@angular/core';
import { Meal } from '../meals';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  aboveHalf(meal: Meal): Meal[] {
    throw new Error('Method not implemented.');
  }
  meals: Meal[] = [
    new Meal('ugali + Nyama', 200, 'African Flour and beef stew'),
    new Meal('Rice + Beef stew', 600, 'Rice combined with stew'),
    new Meal('ugali + Eggs', 700, 'Small Description'),
    new Meal('Chips+ Kuku', 400, 'a combination of chicken and fries'),
  ];

  constructor() {}

  getMeals() {
    return this.meals;
  }
  addMeal(meal: Meal) {
    this.meals.unshift(meal);
    
  }
  
  
  
}
