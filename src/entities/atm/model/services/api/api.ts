import { apiClient } from '@/shared/services/clients/clients.ts';
import { Atm } from '@/entities/atm/model/types/atm-types.ts';
import { Extent } from 'ol/extent';

interface OfficesServiceGetProps {
  message: { atms: Atm[] };
  status: string;
}

class AtmsService {
  static getAllOffices(input: Extent) {
    return apiClient.get<OfficesServiceGetProps>('/atms-for-maps', {
      params: {
        longitude_min: input[0],
        latitude_min: input[1],
        longitude_max: input[2],
        latitude_max: input[3],
      },
    });
  }
}

export { AtmsService };
