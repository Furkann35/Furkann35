import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'profile/update',
        component: ProfileUpdateComponent
    },
    {
        path: 'reset-password',
        component: PasswordresetComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
