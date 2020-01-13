import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-cutomer-view',
  templateUrl: './cutomer-view.component.html',
  styleUrls: ['./cutomer-view.component.css']
})
export class CutomerViewComponent implements OnInit {
  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
   }

  ngOnInit() {
  }

}
