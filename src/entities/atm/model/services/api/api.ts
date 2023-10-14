import { apiClient } from '@/shared/services/clients/clients.ts';
import { Atm } from '@/entities/atm/model/types/atm-types.ts';
import { Extent } from 'ol/extent';

interface OfficesServiceGetProps {
  message: { atms: Atm[] };
  status: string;
}

class AtmsService {
  static getAllOffices(input: Extent) {
    return apiClient.get<OfficesServiceGetProps>('/atms', {
      params: input,
    });
  }
}

export { AtmsService };
