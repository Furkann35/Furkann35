import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  // breadcrumb items
  breadCrumbItems: Array<{}>;
  selectValue = ['Touchscreen', 'Call Function', 'Notifications', 'Fitness', 'Outdoor'];

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Add Product', active: true }];
  }
}
