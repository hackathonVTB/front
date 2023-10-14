import { Extent } from 'ol/extent';
import { IShortBank } from '@/entities/map/model/types/IBanks.ts';
import { useEffect, useState } from 'react';
import { OfficesService } from '@/entities/map/model/services/api/api.ts';

const useOfficeService = (extent: Extent): { offices: IShortBank[] } => {
  const [offices, setOffice] = useState<IShortBank[]>([]);

  useEffect(() => {
    (async () => {
      if (extent.length) {
        const input = {
          longitude_min: extent[0],
          latitude_min: extent[1],
          longitude_max: extent[2],
          latitude_max: extent[3],
        };
        const { message } = await OfficesService.getAllOffices(input);
        setOffice(message);
      }
    })();
  }, [extent]);

  return { offices };
};

export default useOfficeService;
