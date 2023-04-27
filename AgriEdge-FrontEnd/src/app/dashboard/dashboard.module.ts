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
import { MatInputModule} from '@angular/material/input';
import { MatPaginatorModule} from '@angular/material/paginator'
import { MatSortModule} from '@angular/material/sort'
import { WeathertableComponent } from './weathertable/weathertable.component';
import { GaugechartComponent } from './gaugechart/gaugechart.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PlantdashService } from './plantdash/plantdash.service';



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
    WeathertableComponent,
    GaugechartComponent
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
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    PlantdashService
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
    WeathertableComponent,
    GaugechartComponent
  ]
})
export class DashboardModule {
  
}
