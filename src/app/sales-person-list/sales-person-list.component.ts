import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-boostrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales person

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Bolatito","Stun", "bs.@gmail.com", 3000),
    new SalesPerson("John", "Deo", "john@yahoo.com", 4000),
    new SalesPerson("Boss", "Fred", "fredBen@gmail.com", 5000),
    new SalesPerson("Adefunmi", "Layo", "Adelayo@gmail.com", 99999)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
