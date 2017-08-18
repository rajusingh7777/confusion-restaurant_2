import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;
  // selectedDish: Dish;

  constructor( private dishService : DishService,
  @Inject('BaseURL') private BaseURL ) { }

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes1=>this.dishes=dishes1, 
    errmess => this.errMess = <any>errmess);
  }

  // onSelect(dish : Dish){
  //   this.selectedDish = dish;
  // }

}
