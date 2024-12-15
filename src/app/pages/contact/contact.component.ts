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

  // Define loading and success/error states
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}
  // onSubmit() {
  //   this.http
  //     .post('https://liba-backend.vercel.app/send-mail', this.formData)
  //     .subscribe({
  //       next: (response: any) => {
  //         alert('Your message has been sent!');
  //         this.formData = { name: '', email: '', message: '' }; // Reset form
  //       },
  //       error: (error) => {
  //         alert('Failed to send message. Please try again later.'); 
  //       },
  //     });

  //   }

  onSubmit() {
    // Ensure the user sees the loader during request
    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Call the backend endpoint
    this.http.post('https://liba-ethz.vercel.app/api/sendMail', this.formData).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this.successMessage = 'Your message has been sent successfully!';
        // Reset form data after submission
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to send your message. Please try again later.';
        console.error('Error:', error);
      }
    });
  }
  
}
