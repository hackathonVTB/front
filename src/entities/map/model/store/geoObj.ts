import { makeAutoObservable } from 'mobx';
import { Geometry, Point, LineString } from 'ol/geom';

class Geo {
  pos: Point = new Point([0, 0]);
  accuracy: Geometry | undefined;
  geoSearch: boolean = false;
  route: LineString | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setGeoPos(pos: Point, accuracy: Geometry | undefined) {
    this.pos = pos;
    this.accuracy = accuracy;
  }

  setGeoSearch(triger: boolean) {
    this.geoSearch = triger;
  }

  setGeoRoute(route: LineString | null) {
    this.route = route;
  }
}

const geoStore = new Geo();

export { geoStore };
