import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Email } from '../inbox/inbox.model';
import { emailData } from '../inbox/data';

@Component({
  selector: 'app-emailread',
  templateUrl: './emailread.component.html',
  styleUrls: ['./emailread.component.scss']
})

/**
 * Email read Component
 */
export class EmailreadComponent implements OnInit {

  public index: number;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  emailRead: Array<Email>;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.emailRead = emailData.filter((email) => {
        // tslint:disable-next-line: radix
        return email.id === parseInt(params.id);
      });
      this.index = params.id;
    });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Email' }, { label: 'Read', active: true }];
  }


}
