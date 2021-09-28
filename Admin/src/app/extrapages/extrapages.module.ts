import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';

import { MaintenanceComponent } from './maintenance/maintenance.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { Login1Component } from './login1/login1.component';
import { Register1Component } from './register1/register1.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [MaintenanceComponent, Page404Component, Page500Component, Login1Component, Register1Component, RecoverpasswordComponent, LockscreenComponent, ComingsoonComponent],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
