import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Component({
  templateUrl: './multichoice.component.html',
})

export class MultichoiceComponent implements OnInit {
   private  questions:  Array<object> = [];
   private answers: Array<Number> = [];
   private quiz;
   private index = 0;
   private nextClicked = false;
   private prevClicked = false;
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
  this.SaveAnswer();
   if (this.index < this.questions.length - 1) {
    this.index++;
   }
   this.form.reset();
   console.log('inside OnNextClicked');
   this.quiz = this.questions[this.index];
  }

 public OnPrevClicked() {
  console.log('inside OnPrevClicked');

  if (this.index > 0) {
     this.index --;
   }
   console.log('inside OnPrevClicked');
   this.quiz = this.questions[this.index];
 }

  public SaveAnswer() {
    // convert answers into map. to save question number and answer
    console.log('inside SaveAnswer Clicked');
    this.answers[this.index] = this.form.value ;
  }

}


// if index == last
// link next to result page
// on result page, compare answers array and all the answers.
// display green and red
// display explanation
