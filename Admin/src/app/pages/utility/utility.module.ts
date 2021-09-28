import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { UtilityRoutingModule } from './utility-routing.module';
import { UiModule } from '../../shared/ui/ui.module';

import { StarterComponent } from './starter/starter.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [StarterComponent, TimelineComponent, FaqsComponent, PricingComponent],
  imports: [
    CommonModule,
    UtilityRoutingModule,
    UiModule,
    NgbAccordionModule,
    NgbNavModule
  ]
})
export class UtilityModule { }
