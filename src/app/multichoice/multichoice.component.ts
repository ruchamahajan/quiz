import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultService } from '../result/result.service';
import { ResultData } from '../result/resultData';
import { Iquizdb } from '../quiz/quizdb';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-multichoice',
  templateUrl: './multichoice.component.html',
})

export class MultichoiceComponent implements OnInit {
   private  questions:  Array<Iquizdb> = [];
   private answers: Array<object> = [];
   private quiz;
   private index = 0;
   private nextClicked = false;
   private checkRadio;
   private lastQuest = false;
   private resultArray: ResultData[] = [];

   form = new FormGroup({
    options: new FormControl(''),
  });

   constructor(private  quizService:  QuizService, private resultService: ResultService) {
    }

   ngOnInit() {
     this.getQuestions();
   }

 public getQuestions() {
     this.quizService.getQuestionBank().subscribe((data:  Array<Iquizdb>) => {
         this.questions  =  data;
         this.quiz = this.questions[0];
     });
 }

 public OnNextClicked() {

  this.form.reset();
  this.checkRadio = 0;

  if (this.index === this.questions.length - 2 ) {
    this.lastQuest = true;
  }

  if (this.index < this.questions.length - 1) {
    this.index++;

    this.quiz = this.questions[this.index];
  }

  this.checkRadio = this.answers[this.index];

  }

 public OnSubmitClicked() {
  this.resultService.setResultSet(this.resultArray);
  }

 public OnPrevClicked() {

  this.form.reset();
  this.checkRadio = 0;

  if (this.index !== this.questions.length - 2 ) {
    this.lastQuest = false;
  }

  if (this.index > 0) {
     this.index --;
   }
   this.checkRadio = this.answers[this.index];

   this.quiz = this.questions[this.index];
 }

  public SaveAnswer() {
    const val = Object.values(this.form.value)[0] ;
    if (val !== null) {
      this.answers[this.index] = val;
      this.resultArray[this.index] =  {'id' : '' , 'question' : '' , 'answer' : '' , 'userAns' : '' };
      this.resultArray[this.index]['id'] = this.questions[this.index]['id'];
      this.resultArray[this.index]['question'] = this.questions[this.index]['question'];
      this.resultArray[this.index]['answer'] = this.questions[this.index]['answer'];
      this.resultArray[this.index]['userAns'] = val;
    }
  }


}

