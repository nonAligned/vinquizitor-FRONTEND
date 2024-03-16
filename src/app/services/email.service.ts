import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor(private http: HttpClient) { }

  sendEmail(emailData: any) {
    return this.http.post(environment.apiKey + "/mail/send", emailData, {observe:'response'});
  }
}
