import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { DonateCategoryDto } from '../models/donateCategoryDto';
import { Observable } from 'rxjs';
import { DonateCategory } from '../models/donateCategory';

@Injectable({
  providedIn: 'root'
})
export class DonateCategoryService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = 'https://localhost:44318/api/donatecategory/';

  
  getDonateCategoryDetails():Observable<ListResponseModel<DonateCategoryDto>>{
    let newPath=this.apiUrl+"getdonatedetails";
    return this.httpClient.get<ListResponseModel<DonateCategoryDto>>(newPath);
  }

  getDonateCategory():Observable<ListResponseModel<DonateCategory>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<DonateCategory>>(newPath);
  }
}
