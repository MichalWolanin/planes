import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';



@NgModule({
  declarations: [FlightsComponent],
  imports: [CommonModule],
  exports: [FlightsComponent]
})
export class FlightsModule { }
