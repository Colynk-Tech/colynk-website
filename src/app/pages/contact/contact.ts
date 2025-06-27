import { Component, OnInit } from '@angular/core';
import { Button } from '../../components/button/button';
import { Api } from '../../services/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    Button,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit {

  constructor(
    private apiService: Api,
    private fb: FormBuilder
  ) {
  }

  contactForm!: FormGroup;
  formSent = false;

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.sendContactForm(this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.message);
  }
  sendContactForm(name: string, email: string, message: string) {
    this.apiService.sendContactForm(name, email, message).subscribe({
      next: (res) => {
        console.log('Contact form sent successfully:', res);

        if (res.success) {
          // Reset the form on success
          this.contactForm.reset();
          this.formSent = true;
        }
      },
      error: (err) => {
        console.error('Error sending contact form:', err);
      }
    });
  }
}
