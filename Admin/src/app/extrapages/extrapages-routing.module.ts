import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

const routes: Routes = [
    {
        path: 'maintenance',
        component: MaintenanceComponent
    },
    {
        path: 'coming-soon',
        component: ComingsoonComponent
    },
    {
        path: '404',
        component: Page404Component
    },
    {
        path: '500',
        component: Page500Component
    },
    {
        path: 'login-1',
        component: Login1Component
    },
    {
        path: 'register-1',
        component: Register1Component
    },
    {
        path: 'recoverpwd-1',
        component: RecoverpasswordComponent
    },
    {
        path: 'lock-screen-1',
        component: LockscreenComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExtrapagesRoutingModule { }
