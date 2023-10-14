import { Extent } from 'ol/extent';
import { IShortBank } from '@/entities/office/model/types/IBanks.ts';
import { useEffect, useState } from 'react';
import { OfficesService } from '@/entities/office/model/services/api/api.ts';

const useAtmService = (extent: Extent): { offices: IShortBank[] } => {
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const { message } = await OfficesService.getAllOffices(input); // TODO несоответствует тип Object !== Array
        setOffice(message);
      }
    })();
  }, [extent]);

  return { offices };
};

export default useAtmService;
