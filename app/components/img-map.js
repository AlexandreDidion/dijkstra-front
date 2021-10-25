import Component from '@glimmer/component';
import ENV from '../config/environment';

export default class ImgMapComponent extends Component {
  get mapUrl() {
    return `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/geojson(${encodeURIComponent(
      this.geoJson
    )})/auto/320x320?access_token=${ENV.MAPBOX_API_KEY}`;
  }

  get coordinates() {
    let coordinates = new Array();
    let cities = this.args.dijkstra.journey;
    cities.forEach((city) => {
      coordinates.push([
        Number(city.longitude.toFixed(3)),
        Number(city.latitude.toFixed(3)),
      ]);
    });
    return coordinates;
  }

  get geoJson() {
    let data = {
      'type': 'FeatureCollection',
      'features': [
        {
          type: 'Feature',
          'properties': {
            'marker-size': 'medium',
            'marker-color': '#9a1750'
          },
          'geometry': {
            'type': 'MultiPoint',
            'coordinates': this.coordinates
          }
        },
        {
          'type': 'Feature',
          'properties': {
            'stroke': '#555555'
          },
          'geometry': {
            'type': 'LineString',
            'coordinates': this.coordinates
          }
        }
      ]
    }
    return JSON.stringify(data);
  }
}
