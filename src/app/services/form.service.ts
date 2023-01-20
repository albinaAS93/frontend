import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient ) { }

  userData(data: any) {
    return this.http.post(environment.apiUrl + 'users', data);
  }

  login(data: any){
    return this.http.post(environment.apiUrl + 'login', data);
  }

}
