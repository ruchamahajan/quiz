import { Iquizdb } from './quizdb';
import {Injectable, OnInit} from '@angular/core';
import {Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/do';

@Injectable()
export class QuizService {

    private _quizurl: 'http://localhost:8080/questions/forCategoryAndLevel?category=Test&level=1';
    private producturl: 'https://ngapi4.herokuapp.com/api/getProducts';
    constructor(private httpClient: HttpClient) {}

   // getQuestionBank() {
   //     return this.httpClient.get<any>(this.producturl , {observe: 'response'});
   // }


    getQuestionBank(): Observable<any[]> {
        return this.httpClient.get(this.producturl)
                   .map((response: Response) => <any[]> response.json())
                   .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json() || 'Server error');
    }

}
