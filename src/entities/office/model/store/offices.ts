import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';
import { makeAutoObservable } from 'mobx';

class OfficesStore {
  offices: IOfficesSide[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setOffices(inp: IOfficesSide[]) {
    this.offices = inp;
  }
}

const officesStore = new OfficesStore();

export { officesStore };
