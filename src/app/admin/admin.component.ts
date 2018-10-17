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
  private enableDetails = false;
  private question: Iquizdb ;
  private submitMessage: any;
  private  questions:  Array<Iquizdb> = [];
  private quiz;
  private deleteCheckControl;
  private questionRow = {};
  private showTable = false;
  private viewFormArray: FormArray ;
  private viewForm = this.fb.group({
    category: ['Select Category'],
    tag: [''],
    selectAllCheck: ['Select All'],
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

    this.questions  =  [];
    this.quiz = {};

    this.quizService.getQuestionBank().subscribe((data:  Array<Iquizdb>) => {
      this.questions  =  data;
      this.quiz = this.questions[0];
    });
  }

  setAsExam() {

  }

  selectAllCheck() {
    const val = this.viewForm.value['selectAllCheck'];
    if (val === true) {

        for (let i = 0; i < this.questions.length; i++) {
          this.viewFormArray.at(i).patchValue({ deleteCheck: true} );
        }
    }

    if (val === false) {
        this.viewForm.reset();
    }

  }

  deleteSelected() {
    this.viewForm.value.questionList.forEach(element => {
      console.log(element.deleteCheck);
      if (element.deleteCheck === true) {
        this.quizService.deleteQuestionById(element.id).subscribe(
        (error) => {
          if (error !== null) {
            console.error('Error occured while adding question ' + error);
          } } );

          this.viewForm.reset();
      }
    });
  }

  addQuestion() {
    this.enableAdd = true;
    this.enableView = false;
    this.enableDetails = false;
  }

  submitQuestion() {
    console.log(this.addForm.value['question']);
    this.question = this.addForm.value;
    this.quizService.addQuestion(this.question).subscribe(
      (data: Iquizdb) => { this.submitMessage = 'Added Question Successfully (id:' + data.id + ')';
                           this.viewDetailedQuestion(data.id); },
      (error) => console.error('Error occured while adding question ' + error)
      );
    this.addForm.reset();
  }

  viewDetailedQuestion(id) {
    console.log(id);
    this.enableView = false;
    this.enableAdd = false;
    this.enableDetails = true;
    this.quizService.getQuestionDetails(id).subscribe(
      (data: Iquizdb) => { this.question = data;  console.log(data); } ,
      (error) => console.error('Error occured while getting question details of ' + id + ' ' + error)
    );
  }

  viewQuestions() {
    this.enableView = true;
    this.enableAdd = false;
    this.enableDetails = false;

    const questionRow = this.questions.map(ques => {
      return this.fb.group({
        id: [ques.id, [Validators.required, Validators.minLength(2)]],
        question: [ques.question, [Validators.required, Validators.minLength(2)]],
        deleteCheck: [false],
      });
    });

    this.viewFormArray = this.fb.array(questionRow);
    this.viewForm.setControl('questionList', this.viewFormArray);
  }

  printCategory() {
    console.log(this.viewForm.value.category);

    this.quizService.getQuestionsByCategory(this.viewForm.value.category).subscribe((data:  Array<Iquizdb>) => {
      this.questions  =  data;
      this.quiz = this.questions[0];
      console.log(this.quiz);
    });

    this.showTable = true;
  }

  selectQuestion() {
    console.log(this.viewForm.value.questionList[0].deleteCheck);
  }



}
