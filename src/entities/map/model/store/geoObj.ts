import { makeAutoObservable } from 'mobx';
import { Geometry, Point } from 'ol/geom';

class Geo {
  pos: Point = new Point([0, 0]);
  accuracy: Geometry | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setGeoPos(pos: Point, accuracy: Geometry | undefined) {
    this.pos = pos;
    this.accuracy = accuracy;
  }
}

const geoStore = new Geo();

export { geoStore };
