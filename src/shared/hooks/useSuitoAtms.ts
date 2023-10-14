import { useEffect, useState } from 'react';
import { Coordinate } from 'ol/coordinate';
import { useLocalAtmStore } from '@/entities/atm/model/store';
import { $api } from '../api/api';

const useSuitAtms = (point: Coordinate) => {
  const { atmStore } = useLocalAtmStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await $api.get('/get-suit-atm', {
        params: {
          longitude: point[0],
          latitude: point[1],
        },
      });
      if (data.data.message) {
        atmStore.setAtms(data.data.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading };
};

export default useSuitAtms;
