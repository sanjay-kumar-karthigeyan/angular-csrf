import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public http: HttpClient) {}

  getToken() {
    console.log('environment.baseUrl', environment.baseUrl);
    return this.http.get(environment.baseUrl + '/getToken').toPromise();
  }

  checkToken() {
    return this.http.post(environment.baseUrl + '/checkToken', '').toPromise();
  }
}
