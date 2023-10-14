import { apiClient } from '@/shared/services/clients/clients.ts';
import {
  Category,
  Subcategories,
} from '@/pages/not-found-page/model/types/types.ts';

interface CategoryGetProps {
  message: Category[];
  status: string;
}

interface SubcategoriesGetProps {
  message: Subcategories[];
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
}

export { ServiceSelecterService };
