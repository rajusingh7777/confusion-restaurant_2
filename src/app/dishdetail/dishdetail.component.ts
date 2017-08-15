import { Component, OnInit , Input} from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap' //use switchMap instead of switchmap to avoid warning 

import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styles: ['.full-width {width: 95%;}']
})
export class DishdetailComponent implements OnInit {
  dish : Dish;
  dishIds : number[];
  prev : number;
  next : number;
  feedbackForm : FormGroup;
  feedback : Feedback;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder ) {
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

  commentForm(){
      let today = new Date();
      this.feedbackForm = this.fb.group({
      rating : [5],
      author : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment : ['', Validators.required],
      date : [today.toISOString()],
      })

      this.feedbackForm.valueChanges
      .subscribe(data=>this.onValueChanged(data))

    this.onValueChanged();
  }
  
  onValueChanged(data?: any){
    if(!this.feedbackForm){ return; }
    const form = this.feedbackForm;
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
    let today = new Date();
    this.feedback = this.feedbackForm.value;
    this.dish.comments.push(this.feedbackForm.value)
    // console.log(this.feedback);
    this.feedbackForm.reset({
      rating: 5,
      author : '',
      comment : '',
      date : today.toISOString(),
    })
  }

}