import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProposalFormComponent } from '../proposal-form/proposal-form.component'; // Import the ProposalFormComponent

@Component({
  selector: 'app-car-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() car: any;
  carDetails: any;

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/cars/' + this.car.id).subscribe(data => {
      this.carDetails = data;
    });
  }

  openProposalModal() {
    const modalRef = this.modalService.open(ProposalFormComponent); // Open the ProposalFormComponent modal
    modalRef.componentInstance.car = this.carDetails;
  }
}
