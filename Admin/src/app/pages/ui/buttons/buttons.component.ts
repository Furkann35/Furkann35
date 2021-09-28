import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})

/**
 * UI-buttons component
 */
export class ButtonsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  model = {
    left: true,
    middle: false,
    right: false
  };
  radio = 1;
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Buttons', active: true }];
  }
}
