import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Rx';   //to include of operator used Rx instead of Objservable or use seperate- import 'rxjs/add/observable/of
import 'rxjs/add/Operator/toPromise';
import 'rxjs/add/Operator/delay';

@Injectable()
export class LeaderService {

  constructor() { }

  // getLeaders(): Promise<Leader[]>{
  //   return Promise.resolve(LEADERS)};

  // getLeaders(): Promise<Leader[]>{
  //   return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS),2000)});
  // }

  // getLeaders(): Promise<Leader[]>{
  //   return Observable.of(LEADERS).delay(2000).toPromise();
  // }

  getLeaders(): Observable<Leader[]>{
    return Observable.of(LEADERS).delay(2000);
  }

  // this method is not used anywhere in Assignment2
  // getLeader(id1: number): Promise<Leader>{
  //   return Promise.resolve(LEADERS.filter((leader)=>(leader.id===id1))[0]);
  // }

  // getLeader(id1: number): Promise<Leader>{
  //   return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS.filter((leader)=>(leader.id===id1))[0]),2000);
  //   });
  // }

  // getLeader(id1: number): Promise<Leader>{
  //   return Observable.of(LEADERS.filter((leader)=>(leader.id===id1))[0]).delay(2000).toPromise();
  // }

  getLeader(id1: number): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader)=>(leader.id===id1))[0]).delay(2000);
  }

  // used to return featured leader assigned true 
  // getFeaturedLeader(): Promise<Leader>{
  //   return Promise.resolve(LEADERS.filter((leader)=>(leader.featured))[0])
  // }

  // getFeaturedLeader(): Promise<Leader>{
  //   return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS.filter((leader)=>(leader.featured))[0]),2000);
  //   });
  // }

  // getFeaturedLeader(): Promise<Leader>{
  //   return Observable.of(LEADERS.filter((leader)=>(leader.featured))[0]).delay(2000).toPromise();
  // }

  getFeaturedLeader(): Observable<Leader>{
    return Observable.of(LEADERS.filter((leader)=>(leader.featured))[0]).delay(2000);
  }

}
