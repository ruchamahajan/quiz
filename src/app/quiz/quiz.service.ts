import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Iquizdb } from '../quiz/quizdb';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  API_URL  =  'http://localhost:8080/questions';
  private question: Iquizdb;

  constructor(private  httpClient:  HttpClient) {}

  getQuestionBank() {
    return  this.httpClient.get(`${this.API_URL}/forCategoryAndLevel?category=Test&level=0`);
  }

  addQuestion(question) {
    return  this.httpClient.post(`${this.API_URL}/add`, question);
  }

  deleteQuestionById(id) {
    const url = this.API_URL + '/deletebyid/?id=' + id;
    console.log('deleting id -' + id);
    return  this.httpClient.delete(url);
  }
}
