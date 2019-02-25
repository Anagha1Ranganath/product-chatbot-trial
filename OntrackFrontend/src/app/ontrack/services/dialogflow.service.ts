import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DialogflowService {

  private baseURL: String = 'https://api.dialogflow.com/v1/query?v=20150910';

  constructor(private http: HttpClient) { }

  public getResponse(query: String) {
    return this.http
      .post(`${this.baseURL}`, query )
      .map(res => {
        return res.json();
      });
}
}



