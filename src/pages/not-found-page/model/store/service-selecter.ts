import { makeAutoObservable, runInAction } from 'mobx';

import { ServiceSelecterService } from '@/pages/not-found-page/model/services/api/api.ts';

class ServiceSelecterStore {
  categories: string[] = [];
  subcategories: string[] = [];
  categoriesIsLoading = false;
  subcategoriesIsLoading = false;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchCategories() {
    this.categoriesIsLoading = true;

    try {
      const data = await ServiceSelecterService.getAllCategories();

      runInAction(() => {
        this.categories = data.message;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.categoriesIsLoading = false;
      });
    }
  }

  async fetchSubcategories() {
    this.subcategoriesIsLoading = true;

    try {
      const data = await ServiceSelecterService.getAllSubcategories();

      runInAction(() => {
        this.subcategories = data.message;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.subcategoriesIsLoading = false;
      });
    }
  }
}

const serviceSelecterStore = new ServiceSelecterStore();

export { serviceSelecterStore };
