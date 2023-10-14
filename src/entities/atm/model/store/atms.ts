import { makeAutoObservable, runInAction } from 'mobx';
import { Atm } from '../types';
import { AtmsService } from '@/entities/atm/model/services/api/api.ts';
import { Extent } from 'ol/extent';

class AtmsStore {
  atms: Atm[] = [];
  atmsLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchAtms(input: Extent) {
    this.atmsLoading = true;

    try {
      const data = await AtmsService.getAllOffices(input);

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
