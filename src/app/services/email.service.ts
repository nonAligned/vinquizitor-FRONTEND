import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:5000/api";

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  constructor(private http: HttpClient) { }

  sendEmail(emailData: any) {
    return this.http.post(BASE_URL+"/mail/send", emailData, {observe:'response'});
  }
}
