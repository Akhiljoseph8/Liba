import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}
  onSubmit() {
    this.http
      .post('http://localhost:3000/send-mail', this.formData)
      .subscribe({
        next: (response: any) => {
          alert('Your message has been sent!');
          this.formData = { name: '', email: '', message: '' }; // Reset form
        },
        error: (error) => {
          alert('Failed to send message. Please try again later.'); 
        },
      });

    }
  
}
