import Button from '@/shared/ui/button';
import styles from './index.module.scss';
import { observer } from 'mobx-react-lite';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import useInfoAboutOffices from '@/shared/hooks/useInfoAboutOffices';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';

const CardPopover = observer(({ close }: { close?: () => void }) => {
  const { isOpenStore } = useLocalPointsStore();
  const { officeInfoStore } = useLocalOfficeInfoStore();
  const { isLoading } = useInfoAboutOffices(isOpenStore.cardsClick);

  if (isLoading) {
    return <div className={styles.root}>...Loading</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.textHeader}>
          <span className={styles.name}>{officeInfoStore.office?.address}</span>
        </div>
        <div
          onClick={close}
          className={styles.close}
        />
      </div>
      <div className={styles.wrapperAddres}>
        <div className={styles.chips}>
          <span className={styles.time}>1 ч 23 мин · 11,6 км</span>
        </div>
        <div className={styles.chips}>
          <span className={styles.blackText}>
            {officeInfoStore.office?.longitude},
            {officeInfoStore.office?.latitude}
          </span>
        </div>
      </div>
      <div className={styles.wrapperSchedule}>
        <div className={styles.chips}>
          <span className={styles.blackText}>пн-пт</span>
          <span className={styles.blackText}>10:00-19:00</span>
        </div>
        <div className={styles.chips}>
          <span className={styles.blackText}>сб</span>
          <span className={styles.blackText}>10:00 - 18:00</span>
        </div>
        <div className={styles.chips}>
          <span className={styles.blackText}>вс</span>
          <span className={styles.blackText}>выходной</span>
        </div>
      </div>
      <div className={styles.wrapperBtns}>
        <Button view="primary">Маршрут</Button>
      </div>
    </div>
  );
});

export default CardPopover;
