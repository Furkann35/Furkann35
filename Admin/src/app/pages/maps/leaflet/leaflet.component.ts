import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, icon, Layer } from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  constructor() { }
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 6,
    center: latLng(46.879966, -121.726909)
  };

  options2 = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 3,
    center: latLng(46.879966, -121.726909)
  };

  layers = [
    circle([46.95, -122], { radius: 5000 }),
    polygon([[46.8, -121.85], [46.92, -121.92], [46.87, -121.8]]),
    marker([46.879966, -121.726909])
  ];
  // Open Street Map definitions
  LAYER_OSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });

  // Values to bind to Leaflet Directive
  options11 = {
    layers: [this.LAYER_OSM],
    zoom: 10,
    center: latLng(46.879966, -121.726909)
  };
  markers: Layer[] = [];

  addMarker() {
    const newMarker = marker(
      [46.879966 + 0.1 * (Math.random() - 0.5), -121.726909 + 0.1 * (Math.random() - 0.5)],
      {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/logo-sm-dark.png',
          iconRetinaUrl: 'assets/images/logo-sm-dark.png',
          shadowUrl: 'assets/images/logo-sm-dark.png'
        })
      }
    );

    this.markers.push(newMarker);
  }

  removeMarker() {
    this.markers.pop();
  }

  ngOnInit(): void {

  }
}
