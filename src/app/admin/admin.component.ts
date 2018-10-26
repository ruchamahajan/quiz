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

  private enableUsersView = false;
  private enableQuestView = false;
  private enableAddQuestView = false;
  private enableResultView = false;
  private enablePuzzleView = false;
  private enableAnnounceView = false;
  private enableQuestionsDetailView = false;

  private USERS_VIEW = 'usersView';
  private QUEST_VIEW = 'questionsView';
  private QUESTADD_VIEW = 'questionsAddView';
  private QUESTDETAIL_VIEW = 'questionsDetailView';
  private RESULT_VIEW = 'resultsView';
  private PUZZLE_VIEW = 'puzzleView';
  private ANN_VIEW = 'announceView';

  private question: Iquizdb ;
  private submitMessage: any;
  private  questions:  Array<Iquizdb> = [];
  private quiz;
  private deleteCheckControl;
  private questionRow = {};
  private showTable = false;
  private addAnnounce = false;
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

  }

  enableViewByName(viewname) {
    this.enableUsersView = false;
    this.enableQuestView = false;
    this.enableAddQuestView = false;
    this.enableResultView = false;
    this.enablePuzzleView = false;
    this.enableAnnounceView = false;
    this.enableQuestionsDetailView = false;

    switch (viewname) {
      case 'usersView' :
          this.enableUsersView = true;
          break;
      case 'questionsView' :
          this.enableQuestView = true;
          break;
      case 'questionsAddView' :
          this.enableAddQuestView = true;
          break;
      case 'questionsDetailView' :
          this.enableQuestionsDetailView = true;
          break;
      case 'resultsView' :
          this.enableResultView = true;
          break;
      case 'puzzleView' :
          this.enablePuzzleView = true;
          break;
      case 'announceView' :
          this.enableAnnounceView = true;
          break;
    }
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
    this.enableViewByName(this.QUESTADD_VIEW);
  }

  submitQuestion() {
    console.log(this.addForm.value['question']);
    this.question = this.addForm.value;
    this.quizService.addQuestion(this.question).subscribe(
      (data: Iquizdb) => { this.viewDetailedQuestion(data.id); },
      (error) => console.error('Error occured while adding question ' + error)
      );
    this.addForm.reset();
  }

  viewDetailedQuestion(id) {
    this.enableViewByName(this.QUESTDETAIL_VIEW);

    console.log(id);

    this.quizService.getQuestionDetails(id).subscribe(
      (data: Iquizdb) => { this.question = data;  console.log(data); } ,
      (error) => console.error('Error occured while getting question details of ' + id + ' ' + error)
    );
  }

  viewQuestions() {
    this.enableViewByName(this.QUEST_VIEW);
    this.showTable = false;
    this.viewForm.reset();
  }

  selectCategory() {
    this.showTable = false;

    console.log(this.viewForm.value.category);

    this.quizService.getQuestionsByCategory(this.viewForm.value.category).subscribe((data:  Array<Iquizdb>) => {
      this.questions  =  data;
      this.quiz = this.questions[0];
      console.log(this.quiz);
    });

    }

  displayTable() {
    if (this.questions[0].id !== '') {
      const questionRow = this.questions.map(ques => {
      return this.fb.group({
        id: [ques.id, [Validators.required, Validators.minLength(2)]],
        question: [ques.question, [Validators.required, Validators.minLength(2)]],
        deleteCheck: [false],
      });
    });
    this.viewFormArray = this.fb.array(questionRow);
    this.viewForm.setControl('questionList', this.viewFormArray);
    this.showTable = true;
    }
  }

  selectQuestion() {

  }

  addAnnouncement() {
    this.enableViewByName(this.ANN_VIEW);
  }

  submitAnnounce() {

  }
}
