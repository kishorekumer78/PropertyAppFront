import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  sellRent: number = 1;

  constructor(private propertyService: PropertiesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let url: string = this.activatedRoute.snapshot.url.toString();
    // if the property is for sell then sellRent is one
    if (url === "rent-property") {
      this.sellRent = 2;
    }

    this.propertyService.getAllProperties(this.sellRent).subscribe((data: Property[]) => {
      this.properties = data;
    });
  }
}

