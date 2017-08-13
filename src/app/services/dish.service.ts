import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish'
import { DISHES } from '../shared/dishes'

@Injectable()
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]>{
  //   return Promise.resolve(DISHES);
  // }

  getDishes(): Promise<Dish[]>{
    // introducing server latency with 2 sec delay
    return new Promise(resolve=>{
      setTimeout(()=>resolve(DISHES),2000);
    });
  }

  // getDish(id1 : number) : Promise<Dish>{
  //   return Promise.resolve(DISHES.filter((dish)=>(dish.id===id1))[0])
  // }

  getDish(id1 : number) : Promise<Dish>{
    // introducing server latency with 2 sec delay
    return new Promise(resolve=>{setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.id===id1))[0]),2000);
    });
  }

  // getFeaturedDish(): Promise<Dish>{
  //   return Promise.resolve(DISHES.filter((dish)=>(dish.featured))[0])
  // }

  getFeaturedDish(): Promise<Dish>{
    // introducing server latency with 2 sec delay
    return new Promise(resolve=>{setTimeout(()=>resolve(DISHES.filter((dish)=>(dish.featured))[0]),2000);
    });
  }

}
