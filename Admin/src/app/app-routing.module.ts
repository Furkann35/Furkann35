import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';

import { LayoutComponent } from './layouts/layout/layout.component';
import { AnswerDetailsComponent } from './pages/ecommerce/answer-details/answer-details.component';
import { OrderService } from './pages/ecommerce/orders/orders.service';
import { RecourseComponent } from './pages/ecommerce/recourse/recourse.component';
import { FivemUserDetailComponent } from './pages/email/fivem-user-detail/fivem-user-detail.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  // tslint:disable-next-line: max-line-length
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule) },
  { path: "ecommerce/answers/answersDetail/:id", component:AnswerDetailsComponent , loadChildren: () => import('./pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule), canActivate: [LoginGuard]  },
  { path: "email/inbox/fivemUserDetail/:identifier", component:FivemUserDetailComponent , loadChildren: () => import('./pages/email/email.module').then(m => m.EmailModule), canActivate: [LoginGuard]  },
  { path: "recourse", component:RecourseComponent , loadChildren: () => import('./pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule), 
  // canActivate:[AdminGuard ,LoginGuard] 
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
