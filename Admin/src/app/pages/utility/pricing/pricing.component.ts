import { Component, OnInit } from '@angular/core';

import { Price } from './pricing.model';

import { pricingData } from './data';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  pricingData: Price[];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Utility' }, { label: 'Pricing', active: true }];

    this._fetchData();
  }

  private _fetchData() {
    this.pricingData = pricingData;
  }

}
