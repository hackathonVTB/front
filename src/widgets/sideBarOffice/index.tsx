import { observer } from 'mobx-react-lite';
import styles from './sidearOffice.module.scss';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';
import { OfficeList } from '@/entities';

const SideBarOffice = observer(() => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  return (
    <div className={styles.root}>
      <div className={styles.headerText}>{officeInfoStore.office?.address}</div>
      <div>
        <OfficeList />
      </div>
    </div>
  );
});

export default SideBarOffice;
