import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

import { City } from './city'

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(private http: HttpClient) {}

  getItinerary(query: string): Observable<City[]> {
    return this.http.get<City[]>('http://192.168.0.99:3000/itineraire/'+query);
  }

}
