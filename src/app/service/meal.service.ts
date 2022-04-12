import { Injectable } from '@angular/core';
import { Meal } from '../meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  
  meals : Meal[]=[
  new Meal('ugali nyama',200,'lorem',),
  new Meal('ugali nyama',600,'lorem',),
  new Meal('ugali nyama',700,'lorem',),
  new Meal('ugali nyama',400,'lorem',),
  ]
  
  

  constructor() { }
  
  getMeals(){
    return this.meals;
  }
  addMeal(meal:Meal){
    this.meals.push(meal)
  }

}
