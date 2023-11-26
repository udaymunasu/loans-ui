import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

//http://localhost:4200/customers/add

const routes: Routes = [
  { path: '', component: ListCustomersComponent },
  { path: 'list', component: ListCustomersComponent },
  { path: 'add', component: AddCustomersComponent },
  { path: 'edit/:id', component: EditCustomersComponent },
  {
    path: 'view/:id',
    component: ViewCustomerComponent,
    data: { animation: 'customerPage' }
  },
  { path: 'delete/:id', component: DeleteCustomersComponent },
  { path: 'search', component: SearchCustomersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
