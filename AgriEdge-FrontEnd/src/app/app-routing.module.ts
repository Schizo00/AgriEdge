import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FeaturesComponent } from './features/features/features.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { PlantdashComponent } from './dashboard/plantdash/plantdash.component';
import { WeatherdashComponent } from './dashboard/weatherdash/weatherdash.component';
import { LivefeedComponent } from './dashboard/livefeed/livefeed.component';
import { SpreaddashComponent } from './dashboard/spreaddash/spreaddash.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', redirectTo: 'dashboard/plantdash', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'dashboard/plantdash', component: PlantdashComponent},
  {path: 'dashboard/weatherdash', component: WeatherdashComponent},
  {path: 'dashboard/livefeed', component: LivefeedComponent},
  {path: 'dashboard/spreaddash', component: SpreaddashComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
