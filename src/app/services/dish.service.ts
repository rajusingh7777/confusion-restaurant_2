import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishes'

import { Observable } from 'rxjs/Rx';   //to include of operator used Rx instead of Objservable or use seperate- import 'rxjs/add/observable/of
import 'rxjs/add/Operator/toPromise';
import 'rxjs/add/Operator/delay'

@Injectable()
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]>{
  //   return Promise.resolve(DISHES);
  // }

  // getDishes(): Promise<Dish[]>{
  //   // introducing server latency with 2 sec delay
  //   return new Promise(resolve=>{
  //     setTimeout(()=>resolve(DISHES),2000);
  //   });
  // }

  // getDishes(): Promise<Dish[]>{
  //   // introducing server latency with 2 sec delay
  //   return Observable.of(DISHES).delay(2000).toPromise();
  // }

  getDishes(): Observable<Dish[]>{
    // introducing server latency with 2 sec delay
    return Observable.of(DISHES).delay(2000);
  }
  

  // getDish(id1 : number) : Promise<Dish>{
  //   return Promise.resolve(DISHES.filter((dish)=>(dish.id===id1))[0])
  // }

  // getDish(id1 : number) : Promise<Dish>{
  //   // introducing server latency with 2 sec delay
  //   return new Promise(resolve=>{setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.id===id1))[0]),2000);
  //   });
  // }

  // getDish(id1 : number) : Promise<Dish>{
  //   // introducing server latency with 2 sec delay
  //   return Observable.of(DISHES.filter((dish)=>(dish.id===id1))[0]).delay(2000).toPromise();
  // }

  getDish(id1 : number) : Observable<Dish>{
    // introducing server latency with 2 sec delay
    return Observable.of(DISHES.filter((dish)=>(dish.id===id1))[0]).delay(2000);
  }

  // getFeaturedDish(): Promise<Dish>{
  //   return Promise.resolve(DISHES.filter((dish)=>(dish.featured))[0])
  // }

  // getFeaturedDish(): Promise<Dish>{
  //   // introducing server latency with 2 sec delay
  //   return new Promise(resolve=>{setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.featured))[0]),2000);
  //   });
  // }

  // getFeaturedDish(): Promise<Dish>{
  //   // introducing server latency with 2 sec delay
  //   return Observable.of(DISHES.filter((dish)=>(dish.featured))[0]).delay(2000).toPromise();
  // }

  getFeaturedDish(): Observable<Dish>{
    // introducing server latency with 2 sec delay
    return Observable.of(DISHES.filter((dish)=>(dish.featured))[0]).delay(2000);
  }

}
