import { makeAutoObservable } from 'mobx';
import { TToogle, Toogle } from '../types/ITogle';

class ToogleStore {
  toogle: TToogle = Toogle.Office;

  constructor() {
    makeAutoObservable(this);
  }

  setToogle(objcts: TToogle) {
    this.toogle = objcts;
  }
}

const tooglStore = new ToogleStore();

export { tooglStore };
