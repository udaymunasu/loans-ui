import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface Customer {
  _id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  dob: string;
  department: string;
  address: string;
  initial_deposit: number;
  accountType: string;
  accountNumber: string;
  routingNumber: string;
  identificationType: string;
  identificationNumber: string;
  employmentStatus: string;
  employerName: string;
  occupation: string;
  annualIncome: number;
}


@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})
export class AddCustomersComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      department: ['', Validators.required],
      address: ['', Validators.required],
      initial_deposit: ['', Validators.required],
      accountType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      routingNumber: ['', Validators.required],
      identificationType: ['', Validators.required],
      identificationNumber: ['', Validators.required],
      employmentStatus: ['', Validators.required],
      employerName: ['', Validators.required],
      occupation: ['', Validators.required],
      annualIncome: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      return;
    }

    const customerData: Customer = this.customerForm.value;

    this.http.post<any>('http://localhost:8081/customers/save', customerData).subscribe(
      (response) => {
        console.log(response); // Log the response
        this.customerForm.reset(); // Reset the form
      },
      (error) => {
        console.error(error); // Log any errors
      }
    );
  }
}
