import {Component, OnInit, ViewChild} from '@angular/core';
import {FlightsService} from "../../core/services/flights.service";
import {ActivatedRoute} from "@angular/router";
import {FlightFormComponent} from "../flight-form/flight-form.component";

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {
  @ViewChild('flightForm') flighForm: FlightFormComponent;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService
  ) { }

  ngOnInit(): void {

  }

    private loadFlight() {
      const key = this.route.snapshot.params['key'];
      this.flightsService.getFlight(key);
    }


}
