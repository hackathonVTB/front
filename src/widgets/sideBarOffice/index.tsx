import { observer } from 'mobx-react-lite';
import styles from './sidearOffice.module.scss';
import { useLocalOfficeInfoStore } from '@/entities/officeInfo/model/store';

const SideBarOffice = observer(() => {
  const { officeInfoStore } = useLocalOfficeInfoStore();
  return (
    <div>
      <div className={styles.headerText}>{officeInfoStore.office?.address}</div>
    </div>
  );
});

export default SideBarOffice;
