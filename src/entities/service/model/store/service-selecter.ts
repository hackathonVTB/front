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

  categoriesIsLoading = false;
  subcategoriesIsLoading = false;
  availableOfficesIsLoading = false;
  servicesIsLoading = false;
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
}

const serviceSelecterStore = new ServiceSelecterStore();

export { serviceSelecterStore };
