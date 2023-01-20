import { Component, OnInit, ElementRef, VERSION, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-modify-flights',
  templateUrl: './modify-flights.component.html',
  styleUrls: ['./modify-flights.component.css']
})
export class ModifyFlightsComponent implements OnInit {

  public cities = [] as any;
  public flights = [] as any;

  requiredForm!: FormGroup;
  requiredForm2!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private flightsService: FlightsService,
    private formBuilder: FormBuilder,
    protected router: Router
  ) {
    this.createForm();
    this.createForm2();
   }

   createForm() {
    this.requiredForm = this.formBuilder.group({
      id: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      availableSeats: ['', Validators.required]
    });
  }
  createForm2() {
    this.requiredForm2 = this.formBuilder.group({
      id: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      availableSeats: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.createForm2();
    this.citiesList();
    this.flightsList();
  }

  citiesList() {
    this.flightsService.getCities().subscribe( res => {
      this.cities = res;
    })
  }

  flightsList() {
    this.flightsService.getFlights().subscribe( res => {
      this.flights = res;
    })
  }

  get f() {
    return this.requiredForm.controls;
  }
  get ff() {
    return this.requiredForm2.controls;
  }

  add() {
    this.submitted = true;
    this.flightsService.addFlight(this.requiredForm.value).subscribe(res => {
      this.data = res;
      console.log(this.requiredForm.value);
      this.mm.nativeElement.innerHTML = "A new flight has been added.";
    });
  }

  name = "Angular " + VERSION.major;
  @ViewChild("mm")
  mm!: ElementRef;
  message() {
    console.log("Tutti i campi sono obbligatori");
    this.mm.nativeElement.innerHTML = "All fields are required!";
  }

  FF() {
    this.mm.nativeElement.style.display = "none";
  }

  name2 = "Angular " + VERSION.major;
  @ViewChild("mm2")
  mm2!: ElementRef;
  messageUp() {
    console.log("Tutti i campi sono obbligatori");
    this.mm2.nativeElement.innerHTML = "All fields are required!";
  }
  FF2() {
    this.mm2.nativeElement.style.display = "none";
  }

  update() {
    this.submitted = true;
    this.flightsService.updateFlight(this.requiredForm2.value).subscribe(res => {
      this.data = res;
      console.log(this.requiredForm2.value);
      this.mm2.nativeElement.innerHTML = "Flight has been updated.";
    });
  }
}
