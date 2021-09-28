import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.setAttribute('data-topbar', 'dark');
    document.body.setAttribute('data-layout', 'horizontal');
    document.body.removeAttribute('data-sidebar');
  }


}
