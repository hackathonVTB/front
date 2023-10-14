import { observer } from 'mobx-react-lite';
import styles from './sidearOffice.module.scss';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';
import { OfficeList } from '@/entities';
import { useLocalPointsStore } from '@/entities/officePoints/model';

const SideBarOffice = observer(() => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  const { isOpenStore } = useLocalPointsStore();
  return (
    <div className={styles.root}>
      {!isOpenStore.isOpen ? (
        <div>
          <OfficeList />
        </div>
      ) : (
        <div className={styles.headerText}>
          {officeInfoStore.office?.address}
        </div>
      )}
    </div>
  );
});

export default SideBarOffice;
