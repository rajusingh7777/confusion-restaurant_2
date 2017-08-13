import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishes'

import { Observable } from 'rxjs/Rx';   //to include of operator used Rx instead of Objservable or use seperate- import 'rxjs/add/observable/of
// import 'rxjs/add/Operator/toPromise';
// import 'rxjs/add/Operator/delay'

@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]>{
    // introducing server latency with 2 sec delay
    return Observable.of(DISHES).delay(2000);
  }

  getDish(id1 : number) : Observable<Dish>{
    // introducing server latency with 2 sec delay
    return Observable.of(DISHES.filter((dish)=>(dish.id===id1))[0]).delay(2000);
  }

  getFeaturedDish(): Observable<Dish>{
    // introducing server latency with 2 sec delay
    return Observable.of(DISHES.filter((dish)=>(dish.featured))[0]).delay(2000);
  }

  getDishIds(): Observable<number[]>{
    return Observable.of(DISHES.map(dish1=>dish1.id)).delay(2000);
  }

}
