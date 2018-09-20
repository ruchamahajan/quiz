import { Injectable } from '@angular/core';
import { ResultData } from './resultData';

@Injectable({
    providedIn: 'root'
  })
export class ResultService {
    public resultSet: Array<ResultData>;
    public userAnswers: Array<any>;

    constructor() {}

    public getResultSet(): Array<ResultData> {
        return this.resultSet;
    }

    public setResultSet(quest: Array<ResultData>): void {
        this.resultSet = quest;
    }

    public setUserAnswers(ans: Array<any>): void {
        this.userAnswers = ans;
    }

    public getUserAnswers(): Array<any> {
        return this.userAnswers;
    }
}
