import { AfterViewInit, Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [CardModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements AfterViewInit {
  private map!: L.Map;
  private readonly markers: L.Marker[] = [Leaflet.marker([48.7065613, 21.2428065])];
  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
    this.centerMap();
  }

  private initMap() {
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    this.map = Leaflet.map('map');
    Leaflet.tileLayer(baseMapURl).addTo(this.map);
    this.markers.map((marker) =>
      marker
        .addTo(this.map)
        .bindPopup('Autoškola Imrich <br /><br />Werferova 1<br />040 11 Košice'),
    );
  }

  private centerMap() {
    const bounds = Leaflet.latLngBounds(this.markers.map((marker) => marker.getLatLng()));
    this.map.fitBounds(bounds);
  }
}
