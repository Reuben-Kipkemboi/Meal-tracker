import { Injectable } from '@angular/core';
import { Meals } from '../meals';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  getmeals(): Meals[] {
    throw new Error('Method not implemented.');
  }
  meals : Meals[]=[
  new Meals('ugali nyama','46car','lorem',),
  new Meals('ugali nyama','46car','lorem',),
  new Meals('ugali nyama','46car','lorem',),
  new Meals('ugali nyama','46car','lorem',),
  ]

  constructor() { }
}
