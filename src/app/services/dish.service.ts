import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { Http , Response} from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { Observable } from 'rxjs/Rx';   //to include of operator used Rx instead of Objservable or use seperate- import 'rxjs/add/observable/of
// import 'rxjs/add/Operator/toPromise';
// import 'rxjs/add/Operator/delay';
import 'rxjs/add/Operator/catch';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular, private processHTTPMsgService : ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]>{
    // introducing server latency with 2 sec delay
    // return Observable.of(DISHES).delay(2000);
    return this.restangular.all('dishes').getList();
  }

  getDish(id1 : number) : Observable<Dish>{
    // introducing server latency with 2 sec delay
    // return Observable.of(DISHES.filter((dish)=>(dish.id===id1))[0]).delay(2000);
    return this.restangular.one('dishes',id1).get();
  }

  getFeaturedDish(): Observable<Dish>{
    // introducing server latency with 2 sec delay
    // return Observable.of(DISHES.filter((dish)=>(dish.featured))[0]).delay(2000);
    return this.restangular.all('dishes').getList({featured: true})
      .map(dishes1 => dishes1[0]);
  }

  getDishIds(): Observable<number[]>{
    // return Observable.of(DISHES.map(dish1=>dish1.id)).delay(2000);
    return this.getDishes()
     .map(dishes1 => { return dishes1.map(dish1 => dish1.id) })
    //  .catch(error => { return error});
  }

}
