import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent {
  car: any;
  name: string = '';
  cpf: string = '';
  email: string = '';
  phone: string = '';
  offer: number = 0;
  comments: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  submitForm() {
    // Basic validation example
    if (!this.name || !this.cpf || !this.email || !this.phone || !this.offer) {
      alert('Please fill out all required fields.');
      return;
    }

    // Simulate submitting data to the server (replace with actual API call)
    const formData = {
      car: this.car.model,
      name: this.name,
      cpf: this.cpf,
      email: this.email,
      phone: this.phone,
      offer: this.offer,
      comments: this.comments
    };

    // Display submitted data (for demonstration)
    console.log('Form data:', formData);

    // Close the modal after submission
    this.activeModal.close();
  }
}
