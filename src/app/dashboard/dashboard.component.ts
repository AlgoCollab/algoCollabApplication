import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  easyQuestionList = [{name: 'easy1'},{name: 'easy1'},{name: 'easy1'},{name: 'easy1'},{name: 'easy1'},{name: 'easy1'},{name: 'easy1'}];
  mediumQuestionList = [{name: 'medium1'},{name: 'medium1'},{name: 'medium1'},{name: 'medium1'},{name: 'medium1'},{name: 'medium1'}];
  hardQuestionList = [{name: 'hard1'},{name: 'hard1'},{name: 'hard1'},{name: 'hard1'},{name: 'hard1'},{name: 'hard1'}];

  constructor() { }

  ngOnInit(): void {
  }

}
