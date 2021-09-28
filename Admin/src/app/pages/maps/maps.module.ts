import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { UiModule } from '../../shared/ui/ui.module';

import { MapsRoutingModule } from './maps-routing.module';
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
  declarations: [GoogleComponent, LeafletComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    UiModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE'
    }),
    LeafletModule
  ]
})
export class MapsModule { }
