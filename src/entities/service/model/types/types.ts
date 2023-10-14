export interface Category {
  id: number;
  name: string;
}

export interface Subcategories {
  id: number;
  name: string;
  category_id: number;
}

export interface AvailableOffices {
  id: number;
  name: string;
  post_index: string;
  address: string;
  latitude: number;
  longitude: number;
  distance: number;
  load_rate: number;
  rating: number;
  provided_services: ProvidedService[];
}

interface ProvidedService {
  id: number;
  name: string;
  description: string;
  average_processing_time: number;
  is_online: number;
}

export interface Services {
  id: number;
  name: string;
  subcategory_id: number;
}
