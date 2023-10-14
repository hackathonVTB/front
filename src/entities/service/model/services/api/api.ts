import { apiClient } from '@/shared/services/clients/clients.ts';
import {
  AvailableOffices,
  Category,
  Services,
  Subcategories,
} from '@/entities/service/model/types/types.ts';

interface CategoryGetProps {
  message: Category[];
  status: string;
}

interface SubcategoriesGetProps {
  message: Subcategories[];
  status: string;
}

interface ServicesGetProps {
  message: Services[];
  status: string;
}

interface AvailableOfficesGetProps {
  message: AvailableOffices[];
  status: string;
}

class ServiceSelecterService {
  static getAllCategories() {
    return apiClient.get<CategoryGetProps>('/categories');
  }

  static getAllSubcategories(categoryId: number) {
    return apiClient.get<SubcategoriesGetProps>(`/subcategories`, {
      params: {
        category_id: categoryId,
      },
    });
  }

  static getServices(subcategoryId: number) {
    return apiClient.get<ServicesGetProps>(`/services`, {
      params: {
        subcategory_id: subcategoryId,
      },
    });
  }

  static getAvailableOffices(
    serviceId: string,
    longitude: number,
    latitude: number,
  ) {
    return apiClient.get<AvailableOfficesGetProps>(`/available-offices`, {
      params: {
        service_id: serviceId,
        longitude,
        latitude,
      },
    });
  }
}

export { ServiceSelecterService };
