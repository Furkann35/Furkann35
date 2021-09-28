import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/models/answer';
import { AnswersDto } from 'src/app/models/answersDto';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';
import { AnswersService } from 'src/app/services/answers.service';
import { AuthService } from 'src/app/services/auth.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-recourse',
  templateUrl: './recourse.component.html',
  styleUrls: ['./recourse.component.css']
})
export class RecourseComponent implements OnInit {
  recourseAddForm: FormGroup
  question: Question;
  answer: Answer;
  answersDto: AnswersDto;
  answersDtos: AnswersDto[] = [];
  currentAnswerDto: AnswersDto
  questions: Question[] = [];
  user:User;
  users:User[]=[];

  constructor(private questionService: QuestionService,
    private answerService: AnswersService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private activatedRoute:ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit(): void {
    // this.getQuestion();
    this.RecouseAddForm();
    this.getQuestionDto();
  }
  

  getQuestion() {
    this.questionService.getQuestions().subscribe(response => {
      console.log(response);
      this.questions = response.data;
    })
  }

  getQuestionDto() {
    this.questionService.getQuestionsDto().subscribe(response => {
      console.log(response);
      this.answersDtos = response.data;
    })
  }

  RecouseAddForm() {
    this.recourseAddForm = this.formBuilder.group({
      answer: ["", Validators.required],
    })
  }

  setCurrentItem(answersDto: AnswersDto, value: any) {
    answersDto.answer = value
  }

  setCurrentAnswersDto(answerDto: AnswersDto) {
    this.currentAnswerDto = answerDto;
    console.log(this.currentAnswerDto)
  }
  add() {
    // if (this.recourseAddForm.valid) {
    for (var i = 0; i < this.answersDtos.length; i++) {
      this.answer = {
        userId: this.authService.getUserId(),
        questionId: this.answersDtos[i].questionId,
        stateId: 0,
        answer: this.answersDtos[i].answer
      }
      let answerModel = Object.assign({},  this.answer)
      this.answerService.add(answerModel).subscribe(response => {
        this.toastrService.success("Cevaplarınız yetkililere gönderildi", "Başarılı")
        console.log(this.answersDtos)
        console.log(answerModel)        
        console.log(this.answer)
      })
    }
    // }
    //  else {
    //   this.toastrService.error("Form Boş", "Hata")
    // }
  }


}
