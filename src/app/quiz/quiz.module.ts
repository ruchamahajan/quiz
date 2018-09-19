import {NgModule} from '@angular/core';
import { MultichoiceComponent } from '../multichoice/multichoice.component';

import {QuizService} from './quiz.service';

@NgModule({
    declarations: [
        MultichoiceComponent
    ],
    imports: [

    ],
    providers: [
        QuizService
    ]
})

export class QuizModule { }
