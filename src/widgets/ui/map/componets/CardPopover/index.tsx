import Button from '@/shared/ui/button';
import styles from './index.module.scss';
import SendIcon from '@/shared/assets/send-icon.svg';
import SavedIcon from '@/shared/assets/saved-icon.svg';

const CardPopover = ({ close }: { close?: () => void }) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.textHeader}>
          <span className={styles.name}>Семеновский</span>
          <span className={styles.addres}>
            г. Москва, Семеновская пл., д. 7, корп. 17
          </span>
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
          <span className={styles.blackText}>53.195878, 50.100202</span>
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
        <Button
          view="secondary"
          withIcon
        >
          <img
            src={SavedIcon}
            alt={'saved'}
          />
        </Button>
        <Button
          view="secondary"
          withIcon
        >
          <img
            src={SendIcon}
            alt={'send'}
          />
        </Button>
      </div>
    </div>
  );
};

export default CardPopover;
