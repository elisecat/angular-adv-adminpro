import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


import { NgChartsModule } from 'ng2-charts';


import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonnutComponent } from './donnut/donnut.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonnutComponent
  ],
  exports: [
    IncrementadorComponent,
    DonnutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
})
export class ComponentsModule { }
