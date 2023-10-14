import { observer } from 'mobx-react-lite';
import styles from './sidearOffice.module.scss';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';
import { OfficeList } from '@/entities';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { useLocalStore } from '@/entities/service/model';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

const SideBarOffice = observer(() => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  const { isOpenStore } = useLocalPointsStore();
  const { serviceSelecterStore } = useLocalStore();
  const [date, setDate] = useState<string | null>(null);

  const onClick = (date: string) => {
    setDate(date);
    serviceSelecterStore.fethcTimecZone(officeInfoStore.office?.id || 0, date);
  };

  useEffect(() => {
    if (serviceSelecterStore.availableOffices.length) {
      serviceSelecterStore.fetchDaysVisit(officeInfoStore.office?.id || 0);
    }
    return () => {
      setDate(null);
    };
  }, [officeInfoStore.office]);

  return (
    <div className={styles.root}>
      {!isOpenStore.isOpen ? (
        <div>
          <OfficeList />
        </div>
      ) : (
        <div className={styles.headerText}>
          {officeInfoStore.office?.address}
          <div className={styles.textTime}>Разместить во времени</div>
          <div className={styles.grid}>
            {!date ? (
              serviceSelecterStore.days.map((day) => (
                <div
                  key={day}
                  onClick={() => onClick(day)}
                  className={styles.chips}
                >
                  {dayjs(day).format('dd, DD.MM.YYYY')}
                </div>
              ))
            ) : (
              <div>
                <div className={styles.chips}>
                  {dayjs(date).format('dd, DD.MM.YYYY')}
                </div>
                <div className={styles.gridTime}>
                  {serviceSelecterStore.times.map((time) => (
                    <div
                      key={time}
                      className={styles.chips}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default SideBarOffice;
