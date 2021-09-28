import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonateCategory } from '../models/donateCategory';
import { DonateCategoryDto } from '../models/donateCategoryDto';
import { DonateDetailDto } from '../models/donateDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = 'https://localhost:44318/api/donate/';

  getDonateDetails():Observable<ListResponseModel<DonateDetailDto>>{
    let newPath=this.apiUrl+"getdonatedetails";
    return this.httpClient.get<ListResponseModel<DonateDetailDto>>(newPath);
  }

  getDonateDetailById(id:number){
    let newPath=this.apiUrl+"getbyid?id="+id;
    return this.httpClient.get<ListResponseModel<DonateDetailDto>>(newPath);
  }

  getDonateDetailsById(id:number):Observable<SingleResponseModel<DonateDetailDto>>{
    let newPath=this.apiUrl+"getdonatebyid?id="+id;
    return this.httpClient.get<SingleResponseModel<DonateDetailDto>>(newPath);
  }


}
