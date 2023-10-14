import { IShortBank } from '@/entities/map/model/types/IBanks.ts';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { makeAutoObservable } from 'mobx';

class OfficesPointsStore {
  offices: IShortBank[] = [
    {
      id: 1,
      latitude: 0,
      hasRamp: '',
      longitude: 0,
    },
    {
      id: 1,
      hasRamp: '',
      latitude: 0,
      longitude: 0,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setOffices(offInp: IShortBank[]) {
    this.offices = offInp;
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

export { officesPointsStore, extentStore, isOpenStore };
