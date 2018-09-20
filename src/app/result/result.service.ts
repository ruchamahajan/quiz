import { Injectable } from '@angular/core';
import { ResultData } from './resultData';

@Injectable({
    providedIn: 'root'
  })
export class ResultService {
    public resultSet: Array<ResultData>;

    constructor() {}

    public getResultSet(): Array<ResultData> {
        return this.resultSet;
    }

    public setResultSet(quest: Array<ResultData>): void {
        this.resultSet = quest;
    }

}
