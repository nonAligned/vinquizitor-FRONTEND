import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'wine-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  instagram = faInstagram;
  linkedin = faLinkedin;
  contactForm: FormGroup;
  messageText: string = "";
  showMessage: boolean = false;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(1000)]],
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      let emailData = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        subject: this.contactForm.get('subject')?.value,
        message: this.contactForm.get('message')?.value
      }

      this.emailService.sendEmail(emailData).subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.ok) {
            this.messageText = "Message sent successfully";
            this.showMessage = true;
            this.clearMessage();
            this.contactForm.reset();
          }
        },
        error: (error: any) => {
          console.error("Error sending message:", error);
          this.messageText = `Error sending message: ${error.message}`;
          this.showMessage = true;
          this.clearMessage();
        }
      })
    }

  }

  clearMessage(): void {
    setTimeout(() => {
      this.showMessage = false;
      this.messageText = "";
    }, 2500);
  }
}
