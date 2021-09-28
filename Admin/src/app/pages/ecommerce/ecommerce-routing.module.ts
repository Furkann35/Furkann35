import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopsComponent } from './shops/shops.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AnswerDeniedComponent } from './answer-denied/answer-denied.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/:id',
        component: ProductDetailComponent
    },
    {
        path: 'shops',
        component: ShopsComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },

    {
        path: 'add-product',
        component: AddProductComponent
    },
    {
        path: 'accepted',
        component: CustomersComponent
    },
    {
        path: 'denied',
        component: AnswerDeniedComponent
    },
    {
        path: 'answers',
        component: OrdersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule { }
