import { makeAutoObservable, runInAction } from 'mobx';

import { ServiceSelecterService } from '@/pages/not-found-page/model/services/api/api.ts';
import {
  Category,
  Subcategories,
} from '@/pages/not-found-page/model/types/types.ts';

class ServiceSelecterStore {
  categories: Category[] = [];
  subcategories: Subcategories[] = [];
  categoriesIsLoading = false;
  subcategoriesIsLoading = false;
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
}

const serviceSelecterStore = new ServiceSelecterStore();

export { serviceSelecterStore };
