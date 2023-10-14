import { observer } from 'mobx-react-lite';
import styles from './sidearOffice.module.scss';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';
import { OfficeList } from '@/entities';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { useLocalStore } from '@/entities/service/model';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Button from '@/shared/ui/button/button';
dayjs.locale('ru');

const SideBarOffice = observer(() => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  const { isOpenStore } = useLocalPointsStore();
  const { serviceSelecterStore, objectForm } = useLocalStore();
  const [phone, setPhone] = useState<string>();

  const onClick = (date: string) => {
    objectForm.setDays(date);
    serviceSelecterStore.fethcTimecZone(officeInfoStore.office?.id || 0, date);
  };

  const onSubmit = (time: string) => {
    const item = {
      office_id: officeInfoStore.office?.id || 0,
      reservation_date: objectForm.days || '',
      reservation_time: time,
      service_id: objectForm.services?.id || 0,
    };

    serviceSelecterStore.addReservation(item);
  };

  useEffect(() => {
    if (serviceSelecterStore.availableOffices.length) {
      serviceSelecterStore.fetchDaysVisit(officeInfoStore.office?.id || 0);
    }
    return () => {
      objectForm.setDays(null);
    };
  }, [officeInfoStore.office]);

  if (
    (serviceSelecterStore.reservation, serviceSelecterStore).availableOffices
  ) {
    return (
      <div className="rootFoorm">
        <div className={styles.headerText}>
          {officeInfoStore.office?.address}
        </div>
        <span>Получать напоминалки?</span>
        <input
          value={phone}
          placeholder="+7 *** *** ** **"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button
          onClick={() => {
            if (phone?.length === 11) {
              serviceSelecterStore.addReservationNitofy({
                reservation_id: serviceSelecterStore.reservation || 0,
                phone_number: phone,
              });
            }
          }}
        >
          Отправить
        </Button>
      </div>
    );
  }

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
            {!objectForm.days ? (
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
                  {dayjs(objectForm.days).format('dd, DD.MM.YYYY')}
                </div>
                <div className={styles.gridTime}>
                  {serviceSelecterStore.times.map((time) => (
                    <div
                      key={time}
                      onClick={() => onSubmit(time)}
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
