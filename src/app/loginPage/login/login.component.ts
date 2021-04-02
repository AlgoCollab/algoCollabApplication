import { Component, OnInit } from '@angular/core';
import { RoutePath } from 'src/app/model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private navigationService: NavigationService) { }

  navigateToDashBoard() {
    this.navigationService.navigateForward(RoutePath.DASHBOARD);
  }
}
