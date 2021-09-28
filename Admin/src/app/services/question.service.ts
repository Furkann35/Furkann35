import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { ListResponseModel } from '../models/listResponseModel';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { AnswersDto } from '../models/answersDto';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44318/api/question/"

  getQuestions():Observable<ListResponseModel<Question>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Question>>(newPath);
  }

  getQuestionsDto():Observable<ListResponseModel<AnswersDto>>{
    let newPath=this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<AnswersDto>>(newPath);
  }
}
