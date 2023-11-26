import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';
import { Observable } from 'rxjs';
import { Customers } from '../model/Employee';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  //CRUD HTTP methods to Communicate to backend apis:

  baseUri: string = 'http://localhost:8081/customers';
  headers = new HttpHeaders().set('Content-Type', 'Customers');

  getCustomers() {
    let url =
      environment.CUSTOMER_BASE_URL + environment.CUSTOMERS.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
  }


  viewCustomers(id: string): Observable<Customers> {
    return this.httpClient.get<Customers>(`${this.baseUri}/view/${id}`);
  }

  getCustomerDetails(id: string): Observable<any> {
    const getUrl = `${this.baseUri}/${id}`;
    return this.httpClient.get(getUrl);
  }

  updateCustomer(id: string, updatedData: any): Observable<any> {
    const updateUrl = `${this.baseUri}/update/${id}`;
    return this.httpClient.put(updateUrl, updatedData);
  }

  deleteCustomer(id: string): Observable<any> {
    const deleteUrl = `${this.baseUri}/delete/${id}`;

    return this.httpClient.delete(deleteUrl);
  }

  searchCustomer(id) {}
}
