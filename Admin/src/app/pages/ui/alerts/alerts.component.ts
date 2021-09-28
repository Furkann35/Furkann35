import { Component, OnInit } from '@angular/core';

import { alertData } from './data';

import { AlertColor } from './alerts.model';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

/**
 * UI-alerts component
 */
export class AlertsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  alertData: AlertColor[];
  alertData2: AlertColor[];

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Alerts', active: true }];

    this._fetchData();
  }

  private _fetchData() {
    this.alertData = alertData;
  }

  /**
   * Close the alert
   * @param alert fetch the alert for close
   */
  // tslint:disable-next-line: no-shadowed-variable
  close(alert: AlertColor, alertData: AlertColor[]) {
    alertData.splice(alertData.indexOf(alert), 1);
  }

}
