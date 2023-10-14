import { makeAutoObservable } from 'mobx';
import { IAtms } from '@/shared/interface/atms/IAtms';

class AtmsStore {
  atms: IAtms[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setAtms(atms: IAtms[]) {
    this.atms = atms;
  }
}

const atmStore = new AtmsStore();

export { atmStore };
