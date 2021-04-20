import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  property!: Property;
  constructor(private http: HttpClient) { }

  getAllProperties(sellRent: number): Observable<Property[]> {
    return this.http.get<Property[]>("./assets/data/properties.json").pipe(
      map(data => {
        let propertiesArray: Property[] = [];
        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRent === sellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );

  }

  getPropertyById(id: number) {

    return this.http.get("./assets/data/properties.json").pipe(
      map(data => {
        Object.values(data).forEach(element => {
          if (element.id === id) {
            this.property = element;
          }
        });
        return this.property;
      })
    );
  }

}
