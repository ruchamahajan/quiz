import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  API_URL  =  'http://localhost:8080/questions';

  constructor(private  httpClient:  HttpClient) {}

  getQuestionBank() {
    return  this.httpClient.get(`${this.API_URL}/forCategoryAndLevel?category=Test&level=1`);
}

addQuestionInBank(question) {
  return  this.httpClient.post(`${this.API_URL}`, question);
}

}
