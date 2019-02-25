import { Injectable } from '@angular/core';

@Injectable()
export class DialogflowService {

  private baseURL: String = 'https://api.dialogflow.com/v1/query?v=20150910';

  constructor() { }
}

public getResponse() {
  return this.http
    .post(`${this.baseURL}`)
    .map(res => {
      return res.json();
    });
}



