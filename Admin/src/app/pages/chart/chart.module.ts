import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { UiModule } from '../../shared/ui/ui.module';
import { ChartRoutingModule } from './chart-routing.module';

import { ApexComponent } from './apex/apex.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { ChartistComponent } from './chartist/chartist.component';
import { EchartComponent } from './echart/echart.component';
import * as echarts from 'echarts';

@NgModule({
  declarations: [ApexComponent, ChartjsComponent, ChartistComponent, EchartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    UiModule,
    NgApexchartsModule,
    ChartsModule,
    NgxEchartsModule.forRoot({
      echarts,
    }),
  ]
})
export class ChartModule { }
