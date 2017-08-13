import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';   //to include of operator used Rx instead of Objservable or use seperate- import 'rxjs/add/observable/of
// import 'rxjs/add/Operator/toPromise';
// import 'rxjs/add/Operator/delay';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(id1: number): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader)=>(leader.id===id1))[0]).delay(2000);
  }

  getFeaturedLeader(): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader)=>(leader.featured))[0]).delay(2000);
  }

}
