import { Component, OnInit } from '@angular/core';
import {FlightsService} from "../core/services/flights.service";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  constructor(private flightService: FlightsService) { }

  ngOnInit() {
    this.flightService.getFlights().subscribe(console.log);
  }

}
