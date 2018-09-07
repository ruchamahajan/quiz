import { Component, OnInit } from '@angular/core';
import { Iquizdb } from './quiz/quizdb';
import { QuizService } from './quiz/quiz.service';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

 // templateUrl: './multichoice.component.html',
})

export class AppComponent  {
  title = 'Krishna Consciousness Quiz';

}
