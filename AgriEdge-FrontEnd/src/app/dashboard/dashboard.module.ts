import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillMenuComponent } from './pill-menu/pill-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantdashComponent } from './plantdash/plantdash.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { WeatherdashComponent } from './weatherdash/weatherdash.component';
import { LivefeedComponent } from './livefeed/livefeed.component';
import { SpreaddashComponent } from './spreaddash/spreaddash.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { AreachartComponent } from './areachart/areachart.component';
import { MatTableModule } from '@angular/material/table';
import { WeathertableComponent } from './weathertable/weathertable.component';


@NgModule({
  declarations: [
    PillMenuComponent,
    DashboardComponent,
    PlantdashComponent,
    WeatherdashComponent,
    LivefeedComponent,
    SpreaddashComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    AreachartComponent,
    WeathertableComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    MatTableModule
  ],
  exports: [
    PillMenuComponent,
    DashboardComponent,
    PlantdashComponent,
    WeatherdashComponent,
    LivefeedComponent,
    SpreaddashComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    AreachartComponent,
    WeathertableComponent
  ]
})
export class DashboardModule {
  
}
