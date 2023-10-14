import { Coordinate } from 'ol/coordinate';
import { useEffect, useState } from 'react';
import { $api } from '../api/api';
import { useLocalPointsStore } from '@/entities/officePoints/model';

const useSuitOffices = (point: Coordinate) => {
  const { officesPointsStore } = useLocalPointsStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await $api.get('/get-suit-office', {
        params: {
          longitude: point[0],
          latitude: point[1],
        },
      });
      if (data.data.message) {
        officesPointsStore.setOffices(data.data.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return { isLoading };
};

export default useSuitOffices;
