import { $api } from '@/shared/api/api';
import { Extent } from 'ol/extent';
import { useEffect } from 'react';
import { useLocalPointsStore } from '../model';

const useOfficeService = (extent: Extent) => {
  const { officesPointsStore } = useLocalPointsStore();

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
        if (data.data.message) officesPointsStore.setOffices(data.data.message);
      }
    })();
  }, [extent]);
};

export default useOfficeService;
