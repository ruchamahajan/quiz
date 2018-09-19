import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './multichoice.component.html',
})

export class MultichoiceComponent implements OnInit {
   private  questions:  Array<object> = [];
   private answers: Array<object> = [];
   private quiz;
   private index = 0;
   private nextClicked = false;
   private checkRadio;
   private lastQuest = false;

   form = new FormGroup({
    options: new FormControl('Answer'),
  });

   constructor(private  quizService:  QuizService) {
    }

   ngOnInit() {
     this.getQuestions();
   }

 public getQuestions() {
     this.quizService.getQuestionBank().subscribe((data:  Array<object>) => {
         this.questions  =  data;
         this.quiz = this.questions[0];
         console.log(data);
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
  console.log('Submit');
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
    }
  }

}

