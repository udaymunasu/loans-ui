import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {
  updateForm: FormGroup;
  userId: string; // Assuming you have a way to get the user ID

  constructor(private fb: FormBuilder, private customerService: CustomerService, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.updateForm = this.fb.group({
      userId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dob: ['', Validators.required],
      department: ['', Validators.required],
    });

    debugger
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      
      // Set the form values with the fetched customer details
      this.updateForm.patchValue(params);
    });

    // Set the user ID (replace this with your actual logic)
    

    // Fetch initial customer data
    this.fetchCustomerDetails();
  }

  fetchCustomerDetails() {
    // Assuming you have a method to fetch initial customer data
    this.customerService.getCustomerDetails(this.userId).subscribe(data => {
      this.updateForm.patchValue(data); // Update the form with fetched data
    });
  }

  updateCustomer(): void {
    debugger
    if (this.updateForm) {

      this.customerService.updateCustomer(this.userId, this.updateForm.value).subscribe(
        updatedCustomer => {
          console.log(`Customer with ID ${this.userId} updated successfully:`, updatedCustomer);
          // Optionally, update the UI or redirect to a different page
        },
        error => {
          console.error(`Error updating customer with ID ${this.userId}:`, error);
        }
      );
    }
  }
}
