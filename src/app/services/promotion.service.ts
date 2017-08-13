import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Rx';   //to include of operator used Rx instead of Objservable or use seperate- import 'rxjs/add/observable/of
import 'rxjs/add/Operator/toPromise';
import 'rxjs/add/Operator/delay';

@Injectable()
export class PromotionService {

  constructor() { }

  // getPromotions(): Promise<Promotion[]>{
  //   return new Promise(resolve=>{setTimeout(()=>resolve(PROMOTIONS),2000);
  //   });
  // }

  // getPromotion(id1 : number) : Promise<Promotion>{
  //   return new Promise(resolve=>{setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.id===id1))[0]),2000);
  //   })
  // }

  // getFeaturedPromotion(): Promise<Promotion>{
  //   return new Promise(resolve=>{setTimeout(()=>resolve(PROMOTIONS.filter((promo)=>(promo.featured))[0]),2000);
  //   });
  // }

  // getPromotions(): Promise<Promotion[]>{
  //   return Observable.of(PROMOTIONS).delay(2000).toPromise();
  // }

  // getPromotion(id1 : number) : Promise<Promotion>{
  //   return Observable.of(PROMOTIONS.filter((promo)=>(promo.id===id1))[0]).delay(2000).toPromise();
  // }

  // getFeaturedPromotion(): Promise<Promotion>{
  //   return Observable.of(PROMOTIONS.filter((promo)=>(promo.featured))[0]).delay(2000).toPromise();
  // }

  getPromotions(): Observable<Promotion[]>{
    return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id1 : number) : Observable<Promotion>{
    return Observable.of(PROMOTIONS.filter((promo)=>(promo.id===id1))[0]).delay(2000);
  }

  getFeaturedPromotion(): Observable<Promotion>{
    return Observable.of(PROMOTIONS.filter((promo)=>(promo.featured))[0]).delay(2000);
  }
}
