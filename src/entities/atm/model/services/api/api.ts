import { apiClient } from '@/shared/services/clients/clients.ts';
import { Atm } from '@/entities/atm/model/types/atm-types.ts';
import { Coordinate } from 'ol/coordinate';

interface OfficesServiceGetProps {
  message: { atms: Atm[] };
  status: string;
}

class AtmsService {
  static getAllOffices(input: Coordinate) {
    return apiClient.get<OfficesServiceGetProps>('/get-suit-atm', {
      params: {
        longitude: input[0],
        latitude: input[1],
      },
    });
  }
}

export { AtmsService };
