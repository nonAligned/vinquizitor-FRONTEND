import { Component } from '@angular/core';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'wine-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  instagram = faInstagram;
  linkedin = faLinkedin;

  message = {
    name: "",
    email: "",
    subject: "",
    text: ""
  }

  onSubmit() {
    console.log(this.message);
  }
}
