import { Component } from '@angular/core';
import { LoginService } from '../assets/shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'security-ux';
  constructor(public login: LoginService) {}

  getToken() {
    this.login.getToken().then((data) => {
      console.log(data);
    });
  }

  checkToken(){
    this.login.checkToken().then((data) => {
      console.log(data);
    });
  }
}
