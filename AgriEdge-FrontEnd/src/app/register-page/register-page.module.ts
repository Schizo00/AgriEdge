import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCardComponent } from './register-card/register-card.component';
import { RegisterPageComponent } from './register-page/register-page.component';



@NgModule({
  declarations: [
    RegisterCardComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterCardComponent,
    RegisterPageComponent
  ]
})
export class RegisterPageModule { }
