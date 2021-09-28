import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox/inbox.component';
import { EmailreadComponent } from './emailread/emailread.component';

const routes: Routes = [
    {
        path: 'inbox',
        component: InboxComponent
    },
    {
        path: 'read/:id',
        component: EmailreadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmailRoutingModule {}
