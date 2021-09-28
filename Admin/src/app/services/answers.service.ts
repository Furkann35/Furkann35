import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { AnswersDto } from '../models/answersDto';
import { State } from '../models/state';
import { ResponseModel } from '../models/responseModel';
import { Answer } from '../models/answer';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44318/api/answer/";

  
  getAllByOne():Observable<ListResponseModel<AnswersDto>>{
    let newPath=this.apiUrl+"getallbyone";
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }

  getAnswerDetails():Observable<ListResponseModel<AnswersDto>>{
    let newPath=this.apiUrl+"getanswerdetails";
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }
    
  getAnswersDetailById(id:number){
    let newPath=this.apiUrl+"getanswerdetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }

  getAnswerById(id:number){
    let newPath=this.apiUrl+"getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<Answer>>(newPath);
  }

  getAcceptedAnswers():Observable<ListResponseModel<AnswersDto>>{
    let newPath= this.apiUrl+"getacceptedanswers";
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }

  getDeniedAnswers():Observable<ListResponseModel<AnswersDto>>{
    let newPath= this.apiUrl+"getdeniedanswers";
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }

  update(answer:Answer){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"update",answer);
  }

  add(answer:Answer){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",answer);
  }

  getAnswers():Observable<ListResponseModel<Answer>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Answer>>(newPath);
  }

  getQuestionsDtos():Observable<ListResponseModel<AnswersDto>>{
    let newPath=this.apiUrl+"getanswerdetails";
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }

}


