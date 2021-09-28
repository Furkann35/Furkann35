import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FivemUser } from '../models/fivemUser';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FivemUserService {

  constructor(private httpClient:HttpClient) { }
  apiUrl = 'https://localhost:44318/api/fivemuser/';

  getFivemUser():Observable<ListResponseModel<FivemUser>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<FivemUser>>(newPath);
  }

  
  getFivemuserDetailById(identifier:number){
    let newPath=this.apiUrl+"getbyid?identifier="+identifier;
    return this.httpClient.get<ListResponseModel<FivemUser>>(newPath);
  }

}
