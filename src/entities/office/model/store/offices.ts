import { makeAutoObservable } from 'mobx';

class OfficesStore {
  constructor() {
    makeAutoObservable(this);
  }
}

const officesStore = new OfficesStore();

export { officesStore };
