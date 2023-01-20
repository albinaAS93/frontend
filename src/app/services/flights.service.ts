import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFlights } from '../components/flights/flights';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private _url = environment.apiUrl + 'flights';

  constructor(private http: HttpClient) { }

  getCities() {
    return this.http.get(environment.apiUrl + 'cities');
  }

  getFlights(): Observable<IFlights> {
    return this.http.get<IFlights>(this._url);
  }

  addFlight(data: any) {
    return this.http.post(this._url, data);
  }

  updateFlight(data: any) {
    return this.http.put(this._url, data);
  }

  deleteFlight(data: any) {
    return this.http.delete(this._url + "/" + data );
  }

}
