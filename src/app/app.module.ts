import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHTTPInterceptor } from '../assets/shared/services/interceptors/http-interceptor';

import { AppComponent } from './app.component';

import { LoginService } from '../assets/shared/services/login.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,HttpClientXsrfModule],
  providers: [
    LoginService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CustomHTTPInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
