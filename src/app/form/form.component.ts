import { Component, OnInit } from '@angular/core';
import { Meal } from '../meals';
import { MealService } from '../service/meal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  meal:Meal=new Meal('',0,'')
  constructor( private mealservice:MealService) { }

  ngOnInit(): void {
  }
  addMeal(){
   if(this.meal.name==='' || this.meal.calories===0 || this.meal.detail===''){
     alert('please fill the all fields')
   }
   this.mealservice.addMeal(this.meal)
  }

}
