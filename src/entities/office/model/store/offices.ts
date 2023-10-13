import { makeAutoObservable } from 'mobx';

class OfficesStore {
  offices = [
    {
      id: '1',
    },
    {
      id: '1',
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

const officesStore = new OfficesStore();

export { officesStore };
