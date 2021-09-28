import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule, NgbCollapseModule, NgbTooltipModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { Ng5SliderModule } from 'ng5-slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

import { UiModule } from '../../shared/ui/ui.module';

import { OrderSortableDirective } from './orders/orders-sortable.directive';

import { EcommerceRoutingModule } from './ecommerce-routing.module';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopsComponent } from './shops/shops.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AnswerDetailsComponent } from './answer-details/answer-details.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecourseComponent } from './recourse/recourse.component';
import { AnswerDeniedComponent } from './answer-denied/answer-denied.component';
import { FilterDonatePipe } from './pipe/filter-donate.pipe';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ProductsComponent, ProductDetailComponent,OrdersComponent,RecourseComponent ,CustomersComponent,AnswerDetailsComponent, CheckoutComponent, ShopsComponent, AddProductComponent, OrderSortableDirective, AnswerDeniedComponent, FilterDonatePipe],
  imports: [
    CommonModule,
    FormsModule,
    DropzoneModule,

    ReactiveFormsModule,
    EcommerceRoutingModule,
    UiModule,
    ArchwizardModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgSelectModule,
    Ng5SliderModule,
    NgbModalModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right",
      preventDuplicates: true,
      progressBar: true,
      closeButton: true,
    })
  ]
})
export class EcommerceModule { }
