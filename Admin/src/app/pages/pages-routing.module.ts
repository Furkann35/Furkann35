import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { KanbanComponent } from './kanban/kanban.component';

const routes: Routes = [
    { path: 'chat', component: ChatComponent },
    { path: 'kanban-board', component: KanbanComponent },
    { path: 'ecommerce', loadChildren: () => import('./ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
    { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
    { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) },
    { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
    { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
    { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
    { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
    { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
