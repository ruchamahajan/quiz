import { Iquizdb } from './quizdb';
import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QuizService {

    private _quizurl: 'http://localhost:8080/questions/forCategoryAndLevel?category=Test&level=1' ;

    constructor(private _http: Http) {}

    getQuestionsForCategoryAndLevel(category: string, level: number): Observable<Iquizdb[]> {
        return this._http.get(this._quizurl)
                .map((response: Response) => <Iquizdb[]> response.json())
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.json().error || ' server error ' );
    }

}
