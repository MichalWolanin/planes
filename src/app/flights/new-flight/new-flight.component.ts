import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.css']
})
export class NewFlightComponent {

  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>
  ) { }

}
