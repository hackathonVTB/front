import { makeAutoObservable, runInAction } from 'mobx';

import { ServiceSelecterService } from '@/entities/service/model/services/api/api.ts';
import {
  AvailableOffices,
  Category,
  Services,
  Subcategories,
} from '@/entities/service/model/types/types.ts';

class ServiceSelecterStore {
  categories: Category[] = [];
  subcategories: Subcategories[] = [];
  availableOffices: AvailableOffices[] = [];
  services: Services[] = [];
  days: string[] = [];
  times: string[] = [];

  categoriesIsLoading = false;
  subcategoriesIsLoading = false;
  availableOfficesIsLoading = false;
  servicesIsLoading = false;
  dayIsLoading = false;
  timeIsLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchCategories() {
    this.categoriesIsLoading = true;

    try {
      const { message: categories } =
        await ServiceSelecterService.getAllCategories();

      runInAction(() => {
        this.categories = categories;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.categoriesIsLoading = false;
      });
    }
  }

  async fetchSubcategories(categoryId: number) {
    this.subcategoriesIsLoading = true;

    try {
      const { message: subcategories } =
        await ServiceSelecterService.getAllSubcategories(categoryId);

      runInAction(() => {
        this.subcategories = subcategories;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.subcategoriesIsLoading = false;
      });
    }
  }

  async fetchServices(subcategoryId: number) {
    this.servicesIsLoading = true;

    try {
      const { message: services } =
        await ServiceSelecterService.getServices(subcategoryId);

      runInAction(() => {
        this.services = services;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.servicesIsLoading = false;
      });
    }
  }

  async fetchAvailableOffices(
    serviceId: string,
    longitude: number,
    latitude: number,
  ) {
    this.availableOfficesIsLoading = true;

    try {
      const { message: availableOffices } =
        await ServiceSelecterService.getAvailableOffices(
          serviceId,
          longitude,
          latitude,
        );

      runInAction(() => {
        this.availableOffices = availableOffices;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.availableOfficesIsLoading = false;
      });
    }
  }

  async fetchDaysVisit(id: number) {
    this.dayIsLoading = true;

    try {
      const { message: days } =
        await ServiceSelecterService.getAvilabilityDay(id);

      runInAction(() => {
        this.days = days;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.dayIsLoading = false;
      });
    }
  }

  async fethcTimecZone(id: number, date: string) {
    this.timeIsLoading = true;

    try {
      const { message: times } = await ServiceSelecterService.getTimeZone(
        id,
        date,
      );

      runInAction(() => {
        this.times = times;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.timeIsLoading = false;
      });
    }
  }
}

const serviceSelecterStore = new ServiceSelecterStore();

export { serviceSelecterStore };
