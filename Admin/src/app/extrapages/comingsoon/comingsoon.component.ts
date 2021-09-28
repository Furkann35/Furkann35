import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {

  private trialEndsAt: string;
  private diff: number;

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() { }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');

    this.trialEndsAt = '2020-12-31';

    interval(3000).pipe(
      map((x) => {
        this.diff = Date.parse(this.trialEndsAt) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this.days = this.getDays(this.diff);
        this.hours = this.getHours(this.diff);
        this.minutes = this.getMinutes(this.diff);
        this.seconds = this.getSeconds(this.diff);
      });
  }

  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }
}
