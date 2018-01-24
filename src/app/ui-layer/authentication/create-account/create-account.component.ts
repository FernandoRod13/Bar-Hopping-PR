import { Component, OnInit } from '@angular/core';
import { CustomersRepoService } from '../../../domainLayer/repositories/customers/customers-repo.service';
import { Customer } from '../../../domainLayer/structures/Customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private CustomerRepo: CustomersRepoService, private router: Router) { }

  ngOnInit() {
  }


  onCreateAccount(form: any) {
    if (form.valid) {
      if (form.value.password1.length > 7) {
        if (form.value.password1 === form.value.password2) {
        const customer = new Customer('', form.value.name, form.value.email);
        this.CustomerRepo.createNewCustomer(customer, form.value.password1);
        this.router.navigate(['/dashboard']);
        } else {
          console.log('passwords are differents');
        }
      }else {
        console.log('short password');
      }
    } else {
      console.log('empty fields');
    }
  }

}
