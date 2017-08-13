import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]>{
    return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS),2000)});
  }

  // this method is not used anywhere in Assignment2
  // getLeader(id1: number): Promise<Leader>{
  //   return Promise.resolve(LEADERS.filter((leader)=>(leader.id===id1))[0]);
  // }

  getLeader(id1: number): Promise<Leader>{
    return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS.filter((leader)=>(leader.id===id1))[0]),2000);
    });
  }

  // used to return featured leader assigned true 
  // getFeaturedLeader(): Promise<Leader>{
  //   return Promise.resolve(LEADERS.filter((leader)=>(leader.featured))[0])
  // }

  getFeaturedLeader(): Promise<Leader>{
    return new Promise(resolve=>{setTimeout(()=>resolve(LEADERS.filter((leader)=>(leader.featured))[0]),2000);
    });
  }

}
