import { Component, OnInit } from '@angular/core';
import { Button } from '../../components/button/button';
import { Api } from '../../services/api';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertService } from '../../services/alert';

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
    private fb: FormBuilder,
    private alert: AlertService
  ) {
  }

  contactForm!: FormGroup;
  formSent = false;
  loading: boolean;

  ngOnInit(): void {
    this.loading = true;

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.loading = false;
  }

  onSubmit(): void {
    this.sendContactForm(this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.message);
  }
  sendContactForm(name: string, email: string, message: string) {
    this.loading = true;

    this.apiService.sendContactForm(name, email, message).subscribe({
      next: (res) => {
        console.log('Contact form sent successfully:', res);

        if (res.success) {
          // Reset the form on success
          this.contactForm.reset();
          this.formSent = true;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error sending contact form:', err);
        this.alert.add({
          type: 'danger',
          message: 'Er is een fout opgetreden bij het verzenden van het contactformulier. Probeer het later opnieuw.'
        });
        this.loading = false;
      }
    });
  }
}
