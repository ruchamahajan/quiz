import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from './result.service';
import { ResultData } from './resultData';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private userAnswers: Array<object> ;
  private questionSet: Array<object> ;
  private resultArray: Array<ResultData>;
  constructor(private resultService: ResultService) { }


  ngOnInit() {
    this.userAnswers = this.resultService.getUserAnswers();
    this.resultArray = this.resultService.getResultSet();
  }


}
