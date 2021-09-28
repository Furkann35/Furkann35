import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from '../products/products.model';
import { productList } from '../products/data';
import { DonateService } from 'src/app/services/donate.service';
import { AnswersDto } from 'src/app/models/answersDto';
import { DonateDetailDto } from 'src/app/models/donateDetail';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  baseImageUrl = "https://localhost:44318"
  defaultImage = "/images/indir.png"
  donateDetail: DonateDetailDto;
  donateDetails: DonateDetailDto[] = [];
  answersDtos: AnswersDto[] = [];

  // breadcrumb items
  breadCrumbItems: Array<{}>;

  constructor(private activatedRoute: ActivatedRoute,
    private donateService: DonateService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getDonateDetailById(params["id"])
      }
    })
  }

  calculate(oldPrice: number, price: number): number {
    let gap = oldPrice - price;
    return gap / oldPrice * 100
  }

  
getDonateDetailById(id: number) {
  this.donateService.getDonateDetailsById(id).subscribe(response => {
    this.donateDetail = response.data
    console.log(this.donateDetail);
  })
}
}
