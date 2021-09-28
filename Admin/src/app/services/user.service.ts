import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User:User; 
  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44318/api/users/"
   
  getUserById(id:number){
    let newPath=this.apiUrl+"getbyid?Id="+id;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  update(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', user);
  }
}
