import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-maps',
  template: `<!--<div *ngIf="apiLoaded | async">
      <google-map></google-map>
    </div>-->
    <google-map
      [height]="maps_size.height"
      [width]="maps_size.width"
      [options]="options">
      <map-marker
        #marker="mapMarker"
        [options]="markerOptions"
        (mapClick)="openInfoWindow(marker)"></map-marker>
      <map-info-window>Info Window content</map-info-window>
    </google-map> `,
})
export class MapsComponent {
  apiLoaded: Observable<boolean>;

  @ViewChild(MapInfoWindow) infoWindow?: MapInfoWindow;
  maps_size = {
    height: 400,
    width: 750,
  };
  options: google.maps.MapOptions = {
    center: { lat: 38.537442, lng: -0.1401473 },
    zoom: 15,
  };
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    position: {
      lat: 38.537442,
      lng: -0.1401473,
    },
  };
  constructor(httpClient: HttpClient) {
    const maps_keys = 'AIzaSyA3J_4gE5alyDenq8jN4Im7eTzbPp_YeY4';

    this.apiLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${maps_keys}`,
        'callback'
      )
      .pipe(
        map(() => {
          console.log('entro');
          return true;
        }),
        catchError(() => {
          console.log('entro mal');
          return of(false);
        })
      );
  }
  /* constructor(geocoder: MapGeocoder) {
    geocoder.geocode({
      address: '1600 Amphitheatre Parkway, Mountain View, CA'
    }).subscribe(({results}) => {
      console.log(results);
    });
  }*/
  openInfoWindow(marker: MapMarker) {
    this.infoWindow?.open(marker);
  }
}
