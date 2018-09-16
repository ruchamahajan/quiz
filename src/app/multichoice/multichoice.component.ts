import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  templateUrl: './multichoice.component.html',
})

export class MultichoiceComponent implements OnInit {
   private  questions:  Array<object> = [];
   private quiz;
   private index = 0;
   private nextClicked = false;
   private prevClicked = false;
   constructor(private  quizService:  QuizService) { }

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
  console.log('inside OnNextClicked');

   if (this.index < this.questions.length) {
    this.index++;
   }
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

}
