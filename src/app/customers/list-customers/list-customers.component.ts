import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/model/Employee';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../add-customers/add-customers.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  constructor(private customerService: CustomerService, private http: HttpClient, private router: Router) { }

  customers: Customer[] = [];
 
  customerResult: any;
  customerList: any[];
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {

    this.http.get<any>('http://localhost:8081/customers/list').subscribe(
      (response) => {
        this.customers = response.customers;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editCustomer(customer){
    this.router.navigate([`edit/${customer._id}`, { id: customer._id, ...customer }]);
  }


  //using function to route to single customer detail page:

  viewCustomerDetails(customerId: string) {
    this.router.navigate(['/customers/view', customerId]);
  }

  deleteCustomer(id: string): void {
    this.customerService.deleteCustomer(id).subscribe(
      () => {
        // Filter out the deleted customer from the array
        this.customers = this.customers.filter(customer => customer._id !== id);
        console.log(`Customer with ID ${id} deleted successfully.`);
      },
      error => {
        console.error(`Error deleting customer with ID ${id}:`, error);
      }
    );
  }

 

  // getCustomersList() {
  //   this.customerService.getCustomers().subscribe((data: any) => {
  //     this.customerResult = data;
  //     this.customerList = this.customerResult.customerDetails;
  //     console.log("Data that recieved", this.customerList)
  //   });
  // }
}
