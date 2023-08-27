import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

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

  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  submitForm() {
    if (!this.name || !this.cpf || !this.email || !this.phone || !this.offer) {
      alert('Please fill out all required fields.');
      return;
    }

    const formData = {
      car: this.car.model,
      name: this.name,
      cpf: this.cpf,
      email: this.email,
      phone: this.phone,
      offer: this.offer,
      comments: this.comments
    };

    // Make a POST request to your JSON server to save the form data
    this.http.post('http://localhost:3000/proposals', formData).subscribe(response => {
      console.log('Form data saved:', response);
      this.activeModal.close();
    }, error => {
      console.error('Error saving form data:', error);
    });
  }
}
