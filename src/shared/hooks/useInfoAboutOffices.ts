import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';
import { useEffect, useState } from 'react';
import { IOfficesInfo } from '../interface/OfficesInfo/IOfficeInfo';
import { $api } from '../api/api';

const useInfoAboutOffices = (clickOffice: IOfficesInfo | null) => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      if (clickOffice) {
        setIsLoading(true);
        const data = await $api.get(`/office-info`, {
          params: {
            office_id: clickOffice.id,
            longitude: clickOffice.longitude,
            latitude: clickOffice.latitude,
          },
        });
        if (data.data.message) officeInfoStore.setOfficeInfo(data.data.message);
        setIsLoading(false);
      }
    })();
  }, [clickOffice]);
  return { isLoading };
};

export default useInfoAboutOffices;
