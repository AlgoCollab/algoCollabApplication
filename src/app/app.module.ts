import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginPage/login/login.component';
import { LoginCardComponent } from './loginPage/login-card/login-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FriendPanelComponent } from './friend-panel/friend-panel.component';
import { GenericButtonComponent } from './shared/generic-button/generic-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginCardComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    FriendPanelComponent,
    GenericButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
