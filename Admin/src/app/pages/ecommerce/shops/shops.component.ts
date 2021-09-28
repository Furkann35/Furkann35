import { Component, OnInit } from '@angular/core';

import { Shops } from './shops.model';

import { shopsData } from './data';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  shopsData: Shops[];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Shops', active: true }];

    this._fetchData();
  }

  private _fetchData() {
    this.shopsData = shopsData;
  }
}
