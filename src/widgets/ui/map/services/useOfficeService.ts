import { $api } from '@/shared/api/api';
import { IBank } from '@/shared/interface/banks/IBanks';
import { useEffect, useState } from 'react';

const useOfficeService = (): { offices: IBank[]; isLoading: boolean } => {
  const [offices, setOffice] = useState<IBank[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await $api.get('/offices');
      if (data.data.message) setOffice(data.data.message);
      setIsLoading(false);
    })();
  }, []);

  return { offices, isLoading };
};

export default useOfficeService;
