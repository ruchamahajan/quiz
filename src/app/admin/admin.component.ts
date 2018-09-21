import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private enableAdd = false;
  private enableView = false;
  constructor() { }

  ngOnInit() {
  }

  addQuestions() {
    this.enableAdd = true;
  }

  viewQuestions() {
    this.enableView = true;
  }

  updateQuestions() {

  }

  deleteQuestitons() {

  }
}
