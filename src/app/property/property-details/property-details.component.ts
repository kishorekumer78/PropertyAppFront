import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/app/services/properties.service';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  propertyId: number = 0;
  property!: Property;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private propertyService: PropertiesService) { }

  ngOnInit() {
    //this.propertyId = Number(this.activeRoute.snapshot.params['id']);

    this.activeRoute.params.subscribe(params => {

      this.propertyId = +params["id"];   //* here with '+' sign the string is converted to number
      this.propertyService.getPropertyById(this.propertyId).subscribe(res => this.property = res);
    });

  }


  onClickBack(sellRent: number) {
    if (sellRent === 1) {
      this.router.navigate(['/buy-property']);
    } else {
      this.router.navigate(['/rent-property']);
    }

  }

  onClickNext() {
    this.propertyId += 1;
    this.router.navigate(["/property-details", this.propertyId]);
  }
}

