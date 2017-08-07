import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[]{
    return LEADERS;
  }

  // this method is not used anywhere in Assignment2
  getLeader(id1: number): Leader{
    return LEADERS.filter((leader)=>(leader.id===id1))[0];
  }

  // used to return featured leader assigned true 
  getFeaturedLeader(): Leader{
    return LEADERS.filter((leader)=>(leader.featured))[0]
  }

}
