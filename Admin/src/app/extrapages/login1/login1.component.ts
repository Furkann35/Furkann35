import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})

/**
 * Login-1 component
 */
export class Login1Component implements OnInit {

  // set the currenr year
  year: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
  }

}
