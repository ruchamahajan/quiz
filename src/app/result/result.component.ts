import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from './result.service';
import { ResultData } from './resultData';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private resultArray: Array<ResultData>;
  constructor(private resultService: ResultService) { }


  ngOnInit() {
    this.resultArray = this.resultService.getResultSet();
  }


}
