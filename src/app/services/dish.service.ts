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

@Injectable()
export class DishService {

  constructor(private http: Http, private processHTTPMsgService : ProcessHTTPMsgService) { }

  getDishes(): Observable<Dish[]>{
    // introducing server latency with 2 sec delay
    // return Observable.of(DISHES).delay(2000);
    return this.http.get(baseURL + 'dishes')
      .map(res => { return this.processHTTPMsgService.extractData(res) })
      .catch(error =>{return this.processHTTPMsgService.handleError(error)});
  }

  getDish(id1 : number) : Observable<Dish>{
    // introducing server latency with 2 sec delay
    // return Observable.of(DISHES.filter((dish)=>(dish.id===id1))[0]).delay(2000);
    return this.http.get(baseURL + 'dishes/' + id1)
      .map(res => { return this.processHTTPMsgService.extractData(res) })
      .catch(error =>{return this.processHTTPMsgService.handleError(error)});
  }

  getFeaturedDish(): Observable<Dish>{
    // introducing server latency with 2 sec delay
    // return Observable.of(DISHES.filter((dish)=>(dish.featured))[0]).delay(2000);
    return this.http.get(baseURL + 'dishes?featured=true')
      .map(res => { return this.processHTTPMsgService.extractData(res)[0] })
      .catch(error =>{return this.processHTTPMsgService.handleError(error)});
  }

  getDishIds(): Observable<number[]>{
    // return Observable.of(DISHES.map(dish1=>dish1.id)).delay(2000);
    return this.getDishes()
     .map(dishes1 => { return dishes1.map(dish1 => dish1.id) })
    //  .catch(error => { return error});
  }

}
