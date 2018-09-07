import { Component, OnInit } from '@angular/core';
import { Iquizdb } from '../quiz/quizdb';
import { QuizService } from '../quiz/quiz.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './multichoice.component.html',
})

export class MultichoiceComponent implements OnInit {
  title = 'Krishna Consciousness Quiz';
  questionBank: any;
  errorMessage: string;
  keys: any;


  constructor(private quizService: QuizService) { }
   ngOnInit() {
          this.quizService.getQuestionBank().subscribe((data) => this.questionBank = data,
          (error) => this.errorMessage = <any>error);

          console.log('This is data -', this.questionBank);
   }


}
