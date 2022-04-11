import { Component } from '@angular/core';
import { Meals } from './meals';
import { MealService } from './service/meal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meals:Meals[];

  getmeals(){
    return Meals
  }

    constructor(mealsService:MealService) {
      this.meals = mealsService.getmeals()
    }
  title = 'meal-tracker';
}
