import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { UiModule } from '../../shared/ui/ui.module';
import { InboxComponent } from './inbox/inbox.component';
import { EmailreadComponent } from './emailread/emailread.component';

import { EmailRoutingModule } from './email-routing.module';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { FivemUserDetailComponent } from './fivem-user-detail/fivem-user-detail.component';

@NgModule({
  declarations: [InboxComponent, EmailreadComponent, SidepanelComponent, FivemUserDetailComponent],
  imports: [
    CommonModule,
    EmailRoutingModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbPaginationModule,
    CKEditorModule,
    FormsModule,
    UiModule
  ]
})
export class EmailModule { }
