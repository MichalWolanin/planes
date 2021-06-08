import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FlightFormComponent} from "../flight-form/flight-form.component";

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.css']
})
export class NewFlightComponent {
  @ViewChild('#flightForm') flightForm: FlightFormComponent | undefined;

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }

}
