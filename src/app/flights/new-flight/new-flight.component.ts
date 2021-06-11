import {Component, ViewChild} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FlightFormComponent} from "../flight-form/flight-form.component";
import {FlightsService} from "../../core/services/flights.service";

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.css']
})
export class NewFlightComponent {
  @ViewChild('#flightForm') flightForm: FlightFormComponent | undefined;

  constructor(
    private flightsService: FlightsService,
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }

  createFlight() {
    console.log(this.flightForm);
    this.flightsService.addFlight(this.flightForm!.form.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this))
  }

  private onCreatingSuccess() {
    this.dialogRef.close();
  }

  private onCreatingFailure() {
    console.log('some error');
  }

}
