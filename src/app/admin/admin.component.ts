import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { Iquizdb } from '../quiz/quizdb';
import {FormBuilder, FormArray, Validators, ReactiveFormsModule, FormControl, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  private enableAdd = false;
  private enableView = false;
  private question: Iquizdb ;
  private submitMessage: any;
  private  questions:  Array<Iquizdb> = [];
  private quiz;
  private deleteCheckControl;
  private questionRow = {};

  private viewForm = this.fb.group({
    deleteAll: ['Delete All'],
    questionList: new FormArray([])
  });

  private addForm = new FormGroup({
    question: new FormControl(''),
    opt1: new FormControl(''),
    opt2: new FormControl(''),
    opt3: new FormControl(''),
    opt4: new FormControl(''),
    answer: new FormControl(''),
    tags: new FormControl(''),
    category: new FormControl(''),
    level: new FormControl(''),
    note: new FormControl('')
  });


  constructor(private  quizService:  QuizService, private fb: FormBuilder) {

  }


  ngOnInit() {
    this.quizService.getQuestionBank().subscribe((data:  Array<Iquizdb>) => {
      this.questions  =  data;
      this.quiz = this.questions[0];
    });
  }

  selectAllCheck() {

  }

  enableDelete() {
    console.log(this.viewForm.value
      );
    // disable delete in the beginning
    // get the id of the check or get the value of checkBox
    // get the same value of delete button
    // enable delete button
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

    const questionRow = this.questions.map(ques => {
      return this.fb.group({
        id: [ques.id, [Validators.required, Validators.minLength(2)]],
        question: [ques.question, [Validators.required, Validators.minLength(2)]],
        details: ['Details' , [Validators.required, Validators.minLength(2)]],
        delete: ['Delete' , [Validators.required, Validators.minLength(2)]],
      });
    });

    const viewFormArray: FormArray = this.fb.array(questionRow);
    this.viewForm.setControl('questionList', viewFormArray);
  }

  updateQuestions() {

  }

  deleteQuestions() {
    // get the value of enabled checkbox
    // get the question at the index at the value of checkbox
    // pass that question to delete
    this.quizService.deleteQuestion(this.question).subscribe(
       (error) => console.error('Error occured while adding question ' + error)
      );
  }
}
