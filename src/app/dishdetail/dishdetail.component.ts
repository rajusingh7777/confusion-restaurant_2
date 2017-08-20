import { Component, OnInit , Inject} from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap' //use switchMap instead of switchmap to avoid warning 

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
import { visibility,flyInOut,expand } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styles: ['.full-width {width: 95%;}'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block'
  },
  animations: [
    visibility(),
    flyInOut(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {
  dish : Dish;
  dishcopy = null;
  dishIds : number[];
  prev : number;
  next : number;
  commentRatingForm : FormGroup;
  comment : Comment;

  errMess: string;
  visibility = 'shown';

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') private BaseURL) {
      this.commentForm();
  }
  
  formErrors = {
    'author': '',
    'comment': '',
  };

  validationMessages ={
    'author' : {
      'required':'Author name is required',
      'minlength':'Name must be at least 2 characters long',
      'maxlength':'Name cannot be more than 25 characters',
    },

    'comment' : {
      'required':'Comment is required',
    }
  }

  ngOnInit() {
    this.dishservice.getDishIds()
      .subscribe(dishIds1 => this.dishIds=dishIds1)

    this.route.params
      .switchMap((params: Params) => {this.visibility = 'hidden'; return this.dishservice.getDish(+params['id']);})
      .subscribe(dish1=> {this.dish=dish1; {this.dishcopy=dish1; this.setPrevNext(dish1.id)}; this.visibility='shown'},
      errmess => this.errMess = <any>errmess);
  }

  setPrevNext(id : number){
    let index = this.dishIds.indexOf(id);
    this.prev = this.dishIds[(this.dishIds.length + index -1)%this.dishIds.length]
    this.next = this.dishIds[(this.dishIds.length + index +1)%this.dishIds.length]
  }

  goBack(){
    this.location.back();
  }

  commentForm(){
      let today = new Date();
      this.commentRatingForm = this.fb.group({
      rating : [5],
      author : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment : ['', Validators.required],
      })

      this.commentRatingForm.valueChanges
      .subscribe(data=>this.onValueChanged(data))

    this.onValueChanged();
  }
  
  onValueChanged(data?: any){
    if(!this.commentRatingForm){ return; }
    const form = this.commentRatingForm;
    for (const field in this.formErrors){
      this.formErrors[field] = '';
       // clear previous error message (if any)
      const control = form.get(field);
      if (control && control.dirty && !control.valid ) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(){
    this.comment = this.commentRatingForm.value;
    this.comment.date = new Date().toISOString();
    this.dishcopy.comments.push(this.comment);
    this.dishcopy.save()
      .subscribe(dish1 => this.dish = dish1);
    // console.log(this.feedback);
    this.commentRatingForm.reset({
      rating: 5,
      author : '',
      comment : '',
    })
  }

}