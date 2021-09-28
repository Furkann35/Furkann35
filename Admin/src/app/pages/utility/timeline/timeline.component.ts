import { Component, OnInit } from '@angular/core';

import { timelineData } from './data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  timelineData;
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Utility' }, { label: 'Timeline', active: true }];


    this.timelineData = timelineData;
  }

}
