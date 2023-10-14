import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { fromLonLat } from 'ol/proj';
import { makeAutoObservable } from 'mobx';
import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';
import { RView } from 'node_modules/rlayers/RMap';

class OfficesPointsStore {
  offices: IOfficesSide[] = [];
  view: RView = {
    center: fromLonLat([37.61556, 55.75222]),
    zoom: 11,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setOffices(offInp: IOfficesSide[]) {
    this.offices = offInp;
  }

  setView(view: RView) {
    this.view = view;
  }
}

class ExtentStore {
  extent: Extent = [];

  constructor() {
    makeAutoObservable(this);
  }

  setExtent(extent: Extent) {
    this.extent = extent;
  }
}

class isOpenPopoverStore {
  isOpen: boolean = false;
  coords: Coordinate = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen(isOpen: boolean, coordinate: Coordinate) {
    this.isOpen = isOpen;
    this.coords = coordinate;
  }
}

const officesPointsStore = new OfficesPointsStore();
const extentStore = new ExtentStore();
const isOpenStore = new isOpenPopoverStore();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export { officesPointsStore, extentStore, isOpenStore };
