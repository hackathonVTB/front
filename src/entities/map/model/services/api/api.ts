import { apiClient } from '@/shared/services/clients/clients.ts';
import { IShortBank } from '../../types/IBanks.ts';

interface OfficesServiceGetProps {
  message: IShortBank[];
  status: string;
}

class OfficesService {
  static getAllOffices(input: {
    longitude_min: number;
    latitude_min: number;
    longitude_max: number;
    latitude_max: number;
  }) {
    return apiClient.get<OfficesServiceGetProps>('/offices-for-maps', {
      params: input,
    });
  }
}

export { OfficesService };
