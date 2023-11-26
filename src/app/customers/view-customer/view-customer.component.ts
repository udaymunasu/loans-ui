import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { slideInFromRightAnimation } from 'src/app/animation';
import { Customers } from 'src/app/model/Employee';
import { CustomerService } from 'src/app/services/customer.service';
// import { slideInFromRightAnimation } from '';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss'],
  animations: [slideInFromRightAnimation]
})
export class ViewCustomerComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private route: ActivatedRoute, private http: HttpClient
  ) {}
  userId!: number;
  userDetails!: Customers;

  customerId: string = '';
  customer: any = {};
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.customerId = params['id'];
      this.getCustomerDetails();
    });
  }

  getCustomerDetails() {
    this.http
      .get<any>(`http://localhost:8081/customers/view/${this.customerId}`)
      .subscribe(
        (response) => {
          this.customer = response;
          console.log("this.userDetails", this.customer);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  // fetchUserDetails(userId: any) {
  //   this.customerService.viewCustomers(userId)
  //     .subscribe({
  //       next: (res) => {
  //         this.userDetails = res;
  //         console.log("this.userDetails", this.userDetails);

  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     })
  // }
}
