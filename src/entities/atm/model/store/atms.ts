import { makeAutoObservable, runInAction } from 'mobx';
import { Atm } from '../types';
import { AtmsService } from '@/entities/atm/model/services/api/api.ts';
import { Coordinate } from 'ol/coordinate';

class AtmsStore {
  atms: Atm[] = [];
  atmsLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchAtms(point: Coordinate) {
    this.atmsLoading = true;

    try {
      const data = await AtmsService.getAllOffices(point);

      runInAction(() => {
        this.atms = data.message.atms;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.atmsLoading = false;
      });
    }
  }
}

const atmStore = new AtmsStore();

export { atmStore };
