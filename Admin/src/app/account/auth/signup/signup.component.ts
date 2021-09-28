import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
import { UserProfileService } from '../../../core/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  successmsg = false;
  registerForm:FormGroup

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService,
              private userService: UserProfileService,
              private authService:AuthService,
              private toastrService:ToastrService) { }

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    })
  }
  loginRouter() {
    this.toastrService.info("Giriş sayfasına yönlendiriliyorsunuz", "Bilgi")
    setTimeout(() => {
      this.router.navigate(["account/login"]);
    }, 700);
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value)
      let registerModel = Object.assign({}, this.registerForm.value)

      this.authService.register(registerModel).subscribe(response => {
        this.toastrService.success("Başarıyla kayıt olundu","Başarılı")
        this.loginRouter();
      },responseError=>{
        console.log(responseError.error)
      }
      )
    }else{
     this.toastrService.error("Form boş bırakılamaz","Hata")
    }
  }
  ngAfterViewInit() {
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  /**
   * On submit form
   */
  
}
