import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  public flights = [] as any;
  public cities = [] as any;

  data: any;

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsList();
  }

  flightsList() {
    this.flightsService.getFlights().subscribe( res => {
      this.flights = res;
    })
  }

  delete(id:any) {
    this.flightsService.deleteFlight(id).subscribe(res => {
      this.flightsList();
      console.log("Flight has been deleted.");
      this.mm.nativeElement.innerHTML = "Selected flight has been deleted!";
    });
  }

  FF() {
    this.mm.nativeElement.style.display = "none";
  }

  name = "Angular " + VERSION.major;
  @ViewChild("mm")
  mm!: ElementRef;
  message() {
    console.log("Volo eliminato");
  }

}
