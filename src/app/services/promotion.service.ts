import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions'

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[]{
    return PROMOTIONS;
  }

  getPromotion(id1 : number) : Promotion{
    return PROMOTIONS.filter((promo)=>(promo.id===id1))[0]
  }

  getFeaturedPromotion(): Promotion{
    return PROMOTIONS.filter((promo)=>(promo.featured))[0]
  }

}
