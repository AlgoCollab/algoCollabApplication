import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtext: string | undefined;
  
  constructor() {}

  ngOnInit(): void {
  }

}
