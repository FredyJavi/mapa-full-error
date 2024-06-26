import { AfterViewInit, Component } from '@angular/core';
import  mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 
'pk.eyJ1IjoiZnJlZHlqYXZpZXIiLCJhIjoiY2xiMWExcnFyMTMyMTN3cnp0MGVjazViNiJ9.QAB8TQNWnwX6KKnT4sLpag';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})

export class FullScreenPageComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

  

}
