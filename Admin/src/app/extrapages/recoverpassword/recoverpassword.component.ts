import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})

/**
 * Recover password component
 */
export class RecoverpasswordComponent implements OnInit {
  // set the currenr year
  year: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
  }

}
