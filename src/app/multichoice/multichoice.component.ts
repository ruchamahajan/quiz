import { Component, OnInit } from '@angular/core';
import { Iquizdb } from '../quiz/quizdb';
import { QuizService } from '../quiz/quiz.service';

@Component({
  templateUrl: './multichoice.component.html',
})

export class MultichoiceComponent implements OnInit {
  title = 'Krishna Consciousness Quiz';
  quiz: Iquizdb[];
  constructor(private _quizService: QuizService) {
    this._quizService.getQuestionsForCategoryAndLevel('Test', 1)
                     .subscribe(data => { this.quiz = data; });
  }

  ngOnInit(): void {
    this._quizService.getQuestionsForCategoryAndLevel('Test', 1)
        .subscribe((data) => this.quiz = data);
}


}
