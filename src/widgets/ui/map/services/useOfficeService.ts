import { $api } from '@/shared/api/api';
import { Extent } from 'ol/extent';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { useEffect, useState } from 'react';

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
        const data = await $api.get('/offices-for-maps', { params: input });
        if (data.data.message) setOffice(data.data.message);
      }
    })();
  }, [extent]);

  return { offices };
};

export default useOfficeService;
