import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert(`Thank you, ${this.formData.name}! Your message has been sent.`);
    // Reset form data
    this.formData = { name: '', email: '', message: '' };
  }


  
}
