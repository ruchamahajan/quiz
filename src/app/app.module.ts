import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultichoiceComponent } from './multichoice/multichoice.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notfound.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ResultComponent } from './result/result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MultichoiceComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot([
        {path: 'multiOptionQuiz', component: MultichoiceComponent},
        {path: 'home', component: HomeComponent },
        {path: '', redirectTo: 'home' , pathMatch: 'full'},
        {path: '**', component: NotFoundComponent }])
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
