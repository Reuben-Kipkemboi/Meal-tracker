import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MealComponent } from './meal/meal.component';


const routes: Routes = [
  // {
  //   path:'',
  //   component:MealComponent
  // },
  // {
  //   path:"add-meal",
  //   component:FormComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
