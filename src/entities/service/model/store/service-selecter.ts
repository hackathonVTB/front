import { makeAutoObservable, runInAction } from 'mobx';

import { ServiceSelecterService } from '@/entities/service/model/services/api/api.ts';
import {
  AvailableOffices,
  Category,
  Services,
  Subcategories,
} from '@/entities/service/model/types/types.ts';

class ObjectForm {
  categories: Category | null = null;
  subcategories: Subcategories | null = null;
  availableOffices: AvailableOffices | null = null;
  services: Services | null = null;
  days: string | null = null;
  times: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setCategories(category: Category) {
    this.categories = category;
  }

  setSubCategories(subcat: Subcategories) {
    this.subcategories = subcat;
  }

  setAvailableOffices(availableOffices: AvailableOffices) {
    this.availableOffices = availableOffices;
  }

  setServices(service: Services) {
    this.services = service;
  }

  setDays(days: string | null) {
    this.days = days;
  }

  setTimes(time: string) {
    this.times = time;
  }
}

class ServiceSelecterStore {
  categories: Category[] = [];
  subcategories: Subcategories[] = [];
  availableOffices: AvailableOffices[] = [];
  services: Services[] = [];
  days: string[] = [];
  times: string[] = [];
  reservation: number = 0;

  categoriesIsLoading = false;
  subcategoriesIsLoading = false;
  availableOfficesIsLoading = false;
  servicesIsLoading = false;
  dayIsLoading = false;
  timeIsLoading = false;
  reservationIsLoading = false;

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

  async addReservation(input: {
    office_id: number;
    reservation_date: string;
    reservation_time: string;
    service_id: number;
  }) {
    this.reservationIsLoading = true;
    try {
      const { message: reservation } =
        await ServiceSelecterService.addResevation(input);

      runInAction(() => {
        this.reservation = reservation;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.reservationIsLoading = false;
      });
    }
  }

  async addReservationNitofy(input: {
    reservation_id: number;
    phone_number: string;
  }) {
    try {
      await ServiceSelecterService.addResevationNotify(input);
    } finally {
      runInAction(() => {
        this.reservationIsLoading = false;
      });
    }
  }
}

const serviceSelecterStore = new ServiceSelecterStore();
const objectForm = new ObjectForm();

export { serviceSelecterStore, objectForm };
