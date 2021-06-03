import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../core/services/flights.service";
import {Observable} from "rxjs";
import {Flight} from "../models/flight.model";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {
  flights$: Observable<Flight[]> =  this.flightService.getFlights();
  flight: any;

  constructor(private flightService: FlightsService) { }
}
