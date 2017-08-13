import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishservice: DishService,
     private promotionservice: PromotionService,
     private leaderservice: LeaderService ) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish1=>this.dish=dish1);

    this.promotionservice.getFeaturedPromotion()
    .subscribe(promotion1=>this.promotion=promotion1);

    this.leaderservice.getFeaturedLeader()
    .subscribe(leader1=>this.leader=leader1);
  }

}
