import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MultichoiceComponent } from './quiz/multichoice.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MultichoiceComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot([
        {path: 'multiOptionQuiz', component: MultichoiceComponent},
        {path: 'home', component: HomeComponent },
        {path: '', redirectTo: 'home' , pathMatch: 'full'},
        {path: '**', component: NotFoundComponent }])
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
