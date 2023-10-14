import { observer } from 'mobx-react-lite';
import styles from './sidearOffice.module.scss';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { AttmList } from '@/entities/atm/ui';

const SideBarAtm = observer(() => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  const { isOpenStore } = useLocalPointsStore();
  return (
    <div className={styles.root}>
      {!isOpenStore.isOpen ? (
        <div>
          <AttmList />
        </div>
      ) : (
        <div className={styles.headerText}>
          {officeInfoStore.office?.address}
        </div>
      )}
    </div>
  );
});

export default SideBarAtm;
