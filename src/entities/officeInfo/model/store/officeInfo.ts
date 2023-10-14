import { makeAutoObservable } from 'mobx';
import { IOfficesInfo } from '@/shared/interface/OfficesInfo/IOfficeInfo';

class OfficesInfo {
  office: IOfficesInfo | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOfficeInfo(offInp: IOfficesInfo) {
    this.office = offInp;
  }
}

const officeInfoStore = new OfficesInfo();

export { officeInfoStore };
