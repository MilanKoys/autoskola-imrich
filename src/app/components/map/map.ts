import { GoogleMapsModule } from '@angular/google-maps';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { setOptions } from '@googlemaps/js-api-loader';
import { environment } from 'app/environment';

@Component({
  selector: 'app-map',
  imports: [CardModule, GoogleMapsModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  center: google.maps.LatLngLiteral = { lat: 48.7065613, lng: 21.2428065 };
  zoom = 16;
  marker = { lat: 48.7065613, lng: 21.2428065 };

  constructor() {
    setOptions({
      key: environment.googleMapsApiKey,
      v: 'weekly',
    });
  }
}
