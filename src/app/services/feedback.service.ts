import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable } from 'rxjs/Rx';

import { Http , Response} from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class FeedbackService {

  feedback : Feedback;

  constructor(private restangular: Restangular, private processHTTPMsgService : ProcessHTTPMsgService) { }

  // submitFeedback(model:any): Observable<Feedback>{
  //   return this.restangular.all('feedback').post(model, this.feedback)
  // }

  // Or above commented method is also ok

  submitFeedback(feedback:Feedback):Observable<Feedback> {
    return this.restangular.all('feedback').post(feedback);
  }
  
}
