import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/auth.service';
import { AuthfakeauthenticationService } from '../../../core/services/authfake.service';

import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public authenticationService: AuthenticationService,
    private authService:AuthService,
    private toastrService:ToastrService) { }

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.loginForm = this.formBuilder.group({
      email: ['admin@themesdesign.in', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.createLoginForm();
  }

  


  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  home(){
    this.router.navigate(["/"])
  }
   async  login(){
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        
        this.toastrService.info(response.message,"Giriş yapıldı")
        localStorage.setItem("token",response.data.token);
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 1000);
      },responseError=>{
       this.toastrService.error(responseError.error)
      })
    }else{
     this.toastrService.error("Form boş","Hata")
    }
  }

  registerRouter(){
    this.router.navigate(["register"])
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  
  

}
