import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/models/answer';
import { AnswersDto } from 'src/app/models/answersDto';
import { State } from 'src/app/models/state';
import { AnswersService } from 'src/app/services/answers.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-answer-details',
  templateUrl: './answer-details.component.html',
  styleUrls: ['./answer-details.component.css']
})

export class AnswerDetailsComponent implements OnInit {
  answersDtos: AnswersDto[] = [];
  answersDto: AnswersDto;
  currentAnswerDto: AnswersDto;
  currentuseranswer: Answer[] = [];
  state: State;
  answer: Answer;
  answers: Answer[] = [];
  constructor(private answerService: AnswersService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"]) {
        this.getAnswerDetailById(params["id"])
      }
    })
  }
  setCurrentAnswersDto(answersDto: AnswersDto) {
    this.currentAnswerDto = answersDto;
  }


  getAnswerDetailById(id: number) {
    this.answerService.getAnswersDetailById(id).subscribe(response => {
      this.answersDtos = response.data;
      console.log(response)
    })
  }


  // async answerDenied(answersDto: AnswersDto) {
  //   this.currentAnswerDto = answersDto
  //   this.answerService.getAnswerById(answersDto.answerId).subscribe(response => {
  //     this.answer = response.data;
  //     this.answer.stateId = 1;
  //     window.location.reload();
  //     this.answerService.update(this.answer).subscribe(response => {
  //      })
  //   })
  //   console.log(this.currentAnswerDto)
  // }

 async answerAllAccepted(answer: Answer) {
    this.answerService.getAnswers().subscribe(response => {
      this.answers = response.data;
      this.currentuseranswer = this.answers.filter(p => p.userId == this.answersDtos[0].userId)
    })
    for (var i = 0; i < this.currentuseranswer.length; i++) {
      this.currentuseranswer[i].stateId = 2
      this.answerService.update(this.currentuseranswer[i]).subscribe(response => {
        this.toastrService.info('Başvuru Kabul Edildi', 'Başarılı');
       })
       setTimeout(() => {
        window.location.reload();
      }, 1000);
      console.log(this.currentuseranswer[i])
    }
  }


  async answerAllDenied(answer: Answer) {
    this.answerService.getAnswers().subscribe(response => {
      this.answers = response.data;
      this.currentuseranswer = this.answers.filter(p => p.userId == this.answersDtos[0].userId)
    })
    for (var i = 0; i < this.currentuseranswer.length; i++) {
      this.currentuseranswer[i].stateId = 1
      this.answerService.update(this.currentuseranswer[i]).subscribe(response => {
        this.toastrService.info('Başvuru Red Edildi', 'Başarılı');
       })
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      console.log(this.currentuseranswer[i])
    }

  }

}



