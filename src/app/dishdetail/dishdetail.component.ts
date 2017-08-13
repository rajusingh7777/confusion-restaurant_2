import { Component, OnInit , Input} from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap' //use switchMap instead of switchmap to avoid warning 


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish : Dish;
  dishIds : number[];
  prev : number;
  next : number;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location ) {
  }

  ngOnInit() {
    this.dishservice.getDishIds()
      .subscribe(dishIds1 => this.dishIds=dishIds1)

    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish1=> {this.dish=dish1;this.setPrevNext(dish1.id) });
  }

  setPrevNext(id : number){
    let index = this.dishIds.indexOf(id);
    this.prev = this.dishIds[(this.dishIds.length + index -1)%this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index +1)%this.dishIds.length]
  }

  goBack(){
    this.location.back();
  }

}

