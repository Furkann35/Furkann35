import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UiModule } from '../../shared/ui/ui.module';
import { AuthRoutingModule } from './auth-routing';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordresetComponent, ProfileComponent, ProfileUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    UiModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { }
