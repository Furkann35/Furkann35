import { Component, OnInit } from '@angular/core';

import { productList } from './data';
import { ProductModel } from './products.model';

import { Options } from 'ng5-slider';
import { DonateService } from 'src/app/services/donate.service';
import { DonateCategoryDto } from 'src/app/models/donateCategoryDto';
import { DonateCategoryService } from 'src/app/services/donate-category.service';
import { DonateCategory } from 'src/app/models/donateCategory';
import { DonateDetailDto } from 'src/app/models/donateDetail';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  DonateDetails: DonateDetailDto[] = [];
  donateDetail: DonateDetailDto;
  donateCategoryDetails:DonateCategoryDto[]=[];
  donateCategorys:DonateCategory[]=[];
  donateCategory:DonateCategory;
  filterDonateName:"";

  currentdonateCategoryDetail:DonateCategoryDto;
  baseImageUrl = "https://localhost:44318"
  defaultImage = "/images/indir.png"
  breadCrumbItems: Array<{}>;
  Donate: DonateDetailDto[];
  donate: DonateDetailDto;
  productList: ProductModel[];


  // public products: ProductModel[] = [];

  // pricevalue = 250;
  // minVal = 100;
  // maxVal = 800;
  // priceoption: Options = {
  //   floor: 0,
  //   ceil: 1000,
  //   translate: (value: number): string => {
  //     return '$' + value;
  //   },
  // };


  isCollapsed: boolean;
  collapsed: boolean;
  collapsed3: boolean;

  constructor(private donateService: DonateService,
    private donateCategoryService: DonateCategoryService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product', active: true }];

    this.isCollapsed = true;
    this.collapsed = true;
    this.collapsed3 = true;

    // this.productList = productList;
    this.donateDetails();
    this.getDonateCategoryDetails();
  }

  donateDetails() {
    this.donateService.getDonateDetails().subscribe(response => {
      this.DonateDetails = response.data;
      console.log(response)
    })
  }

  setCurrentCategory(donateCategoryDto: DonateCategoryDto) {
    this.currentdonateCategoryDetail = donateCategoryDto;
  }

  calculate(oldPrice: number, price: number): number {
    let gap = oldPrice - price;
    return gap / oldPrice * 100
  }


  getDonateCategoryDetails() {
    this.donateCategoryService.getDonateCategory().subscribe(response=>{
      this.donateCategorys = response.data;
      console.log(response)
      console.log(this.donateCategorys)
    })
  }


  /**
   * search the record
   * @param e element
   */
  // searchFilter(e) {
  //   const searchStr = e.target.value;
  //   this.donates = productList.filter((product) => {
  //     return product.name.toLowerCase().search(searchStr.toLowerCase()) !== -1;
  //   });
  // }

  /***
   * slider change fetch the record
   */

}
