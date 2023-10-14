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
    zoom: 13,
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
  cardsClick: IOfficesSide | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen(
    isOpen: boolean,
    coordinate: Coordinate,
    cardsClick: IOfficesSide | null,
  ) {
    this.isOpen = isOpen;
    this.coords = coordinate;
    this.cardsClick = cardsClick;
  }
}

const officesPointsStore = new OfficesPointsStore();
const extentStore = new ExtentStore();
const isOpenStore = new isOpenPopoverStore();

export { officesPointsStore, extentStore, isOpenStore };
