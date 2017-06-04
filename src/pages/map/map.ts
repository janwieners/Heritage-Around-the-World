import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import 'leaflet';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  icons: any = {
    'aegyptologie': {
      iconUrl: 'assets/markers/aegyptologie.png',
      shadowUrl: 'assets/markers/marker-shadow.png',
      iconSize: [25, 40],
      shadowAnchor: [11, 20],
      popupAnchor: [1, -20]
    },
    'ethnologie': {
      iconUrl: 'assets/markers/ethnologie.png',
      shadowUrl: 'assets/markers/marker-shadow.png',
      iconSize: [25, 40],
      shadowAnchor: [11, 20],
      popupAnchor: [1, -20]
    },
    'intkomm': {
      iconUrl: 'assets/markers/intkomm.png',
      shadowUrl: 'assets/markers/marker-shadow.png',
      iconSize: [25, 40],
      shadowAnchor: [11, 20],
      popupAnchor: [1, -20]
    },
    'islamwissenschaften': {
      iconUrl: 'assets/markers/islamwissenschaften.png',
      shadowUrl: 'assets/markers/marker-shadow.png',
      iconSize: [25, 40],
      shadowAnchor: [11, 20],
      popupAnchor: [1, -20]
    },
    'japanologie': {
      iconUrl: 'assets/markers/japanologie.png',
      shadowUrl: 'assets/markers/marker-shadow.png',
      iconSize: [25, 40],
      shadowAnchor: [12, 20],
      popupAnchor: [1, -50]
    }
  };

  markers: any = [{
    latitude: '135.72845',
    longitude: '35.039512',
    department: 'japanologie',
    detail: 'detail-japan-kinkakuji'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  private initializeMap() {

    let map = L.map('map')
      .setView([50.9213393, 6.9184396], 5);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      accessToken: 'pk.eyJ1IjoiZG9jZm5vcmQiLCJhIjoiY2oyaXVvbWJoMDAyaTJ3bnMwa3N2Ynp0cCJ9.r2ZDHVEmSv2y9XwZzjnjWw'
    }).addTo(map);

    return map;
  }

  private addMarkers(map) {

    let marker, bounds = new L.LatLngBounds(L.latLng(0, 0), L.latLng(0, 0));

    for (let cur of this.markers) {

      bounds.extend(new L.LatLng(cur.longitude, cur.latitude));
      marker = L.marker([cur.longitude, cur.latitude], {icon: L.icon(this.icons[cur.department])});
      map.addLayer(marker);
    }

    map.fitBounds(bounds);
  }

  ionViewDidLoad() {

    let map = this.initializeMap();
    this.addMarkers(map);
  }

}
