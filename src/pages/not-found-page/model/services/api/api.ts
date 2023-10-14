import { apiClient } from '@/shared/services/clients/clients.ts';

interface CategoryGetProps {
  message: string[];
  status: string;
}

class ServiceSelecterService {
  static getAllCategories() {
    return apiClient.get<CategoryGetProps>('/categories');
  }

  static getAllSubcategories() {
    return apiClient.get<CategoryGetProps>(`/categories/1/subcategories`);
  }
}

export { ServiceSelecterService };
