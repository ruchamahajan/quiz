import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Iquizdb } from '../quiz/quizdb';
import {FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  private enableAdd = false;
  private enableView = false;
  constructor(private  quizService:  QuizService) { }
  private question: Iquizdb ;
  private submitMessage: any;
  private  questions:  Array<Iquizdb> = [];
  private quiz;

  addForm = new FormGroup({
    question: new FormControl(),
    opt1: new FormControl(),
    opt2: new FormControl(),
    opt3: new FormControl(),
    opt4: new FormControl(),
    answer: new FormControl(),
    tags: new FormControl(),
    category: new FormControl(),
    level: new FormControl(),
    note: new FormControl()
  });

  ngOnInit() {

  }

  addQuestion() {
    this.enableAdd = true;
    this.enableView = false;
  }

  submitQuestion() {
    console.log(this.addForm.value['question']);
    this.question = this.addForm.value;
    this.quizService.addQuestion(this.question).subscribe(
      (data: Iquizdb) => this.submitMessage = 'Added Question Successfully (id:' + data.id + ')',
      (error) => console.error('Error occured while adding question ' + error)
      );
  }

  viewQuestions() {
    this.enableView = true;
    this.enableAdd = false;

    this.quizService.getQuestionBank().subscribe((data:  Array<Iquizdb>) => {
          this.questions  =  data;
          this.quiz = this.questions[0];
      });
  }

  updateQuestions() {

  }

  deleteQuestitons() {

  }
}
