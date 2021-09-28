import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { GridComponent } from './grid/grid.component';
import { ImagesComponent } from './images/images.component';
import { ModalsComponent } from './modals/modals.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TypographyComponent } from './typography/typography.component';
import { GeneralComponent } from './general/general.component';
import { VideoComponent } from './video/video.component';
import { TabsComponent } from './tabs/tabs.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { RangesliderComponent } from './rangeslider/rangeslider.component';

const routes: Routes = [
    {
        path: 'alerts',
        component: AlertsComponent
    },
    {
        path: 'buttons',
        component: ButtonsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'carousel',
        component: CarouselComponent
    },
    {
        path: 'dropdowns',
        component: DropdownsComponent
    },
    {
        path: 'grid',
        component: GridComponent
    },
    {
        path: 'images',
        component: ImagesComponent
    },
    {
        path: 'modals',
        component: ModalsComponent
    },
    {
        path: 'progressbar',
        component: ProgressbarComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'general',
        component: GeneralComponent
    },
    {
        path: 'video',
        component: VideoComponent
    },
    {
        path: 'tabs-accordions',
        component: TabsComponent
    },
    {
        path: 'sweet-alert',
        component: SweetalertComponent
    },
    {
        path: 'rangeslider',
        component: RangesliderComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UiRoutingModule { }
