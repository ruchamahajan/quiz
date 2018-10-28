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
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MultichoiceComponent,
    ResultComponent,
    AdminComponent,
    LoginComponent,
    ContactusComponent,
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
        {path: 'result', component: ResultComponent},
        {path: 'admin', component: AdminComponent},
        {path: 'login', component: LoginComponent},
        {path: 'contactus', component: ContactusComponent},
        {path: '', redirectTo: 'home' , pathMatch: 'full'},
        {path: '**', component: NotFoundComponent }])
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }
