import { Component, OnInit , Input} from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dish : Dish;
  // allcomments = this.dish.comments;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location ) {
  }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id)
    .subscribe(dish1=>this.dish=dish1);
  }

  goBack(){
    this.location.back();
  }

}

