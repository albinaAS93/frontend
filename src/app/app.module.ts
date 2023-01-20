import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { TravelGuard } from './travel.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { FlightsComponent } from './components/flights/flights.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModifyFlightsComponent } from './components/modify-flights/modify-flights.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'form', component: FormComponent},
  {path: 'flights', component: FlightsComponent,
    canActivate: [TravelGuard]},
  {path: 'modifyFlights', component: ModifyFlightsComponent,
    canActivate: [TravelGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    FlightsComponent,
    ModifyFlightsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
