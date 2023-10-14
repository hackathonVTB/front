import styles from './index.module.scss';
import { BsGeoAlt } from 'react-icons/bs';

const Menu = () => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <span className={styles.itemText}>
          <BsGeoAlt />
          Ближайшие отделения
        </span>
      </div>
    </div>
  );
};

export default Menu;
