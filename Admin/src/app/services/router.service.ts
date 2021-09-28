import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private titleService: Title,
  ) {}

  pageNotFoundRoute() {
    this.titleService.setTitle('Sayfa Bulunamadı');

    this.router.navigate(['']).then(() => {
      this.toastrService.error('Sayfa Bulunamadı', 'Hata');
    });
  }
}