import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Email } from './inbox.model';
import { emailData } from './data';
import { FivemUser } from 'src/app/models/fivemUser';
import { FivemUserService } from 'src/app/services/fivem-user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})

/**
 * Email Inbox component
 */
export class InboxComponent implements OnInit {

  fivemUser: FivemUser[] = []
  constructor(private fivemUserService: FivemUserService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  this.getFivemUserAll();

  }


  getFivemUserAll() {
    this.fivemUserService.getFivemUser().subscribe(response => {
      this.fivemUser = response.data
      console.log(this.fivemUser)
    })
  }

}
