import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {
  userUpdateForm: FormGroup
  user:User
  userId:number
  constructor(private toastrService:ToastrService,
    private userService:UserService,
    private formBuilder : FormBuilder,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.getUserId()
    this.getUserDetailsByUserId(this.userId)
  }

  getUserId(){
    this.userId = this.authService.getUserId()
  }

  async getUserDetailsByUserId(id: number) {
    this.user = (await this.userService.getUserById(id).toPromise()).data[0]
    this.createUserUpdateForm();
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  update(){
    if(this.userUpdateForm.valid){
      let userModel:User = Object.assign({ 
        // passwordSalt: this.user.passwordSalt, passwordHash: this.user.passwordHash
        id: this.user.Id}, this.userUpdateForm.value)
      this.userService.update(userModel).subscribe(response=>{
        if(response.success){
          this.toastrService.success(response.message, "Başarılı")
        }
      }, responseError=>{
        if (responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(
              responseError.error.Errors[i].ErrorMessage,
              'Doğrulama hatası'
            );
          }
        }
      })
    }else{
      this.toastrService.error("Tüm alanları doldurun.")
    }
  }


}
