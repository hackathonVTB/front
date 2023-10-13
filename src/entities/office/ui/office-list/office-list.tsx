import { classNames } from '@/shared';
import styles from './office-list.module.scss';
import { useLocalStore } from '../../model';

interface OfficeListProps {
  className?: string;
}

const OfficeList = (props: OfficeListProps) => {
  const { className } = props;
  const { officesStore } = useLocalStore();

  console.log(officesStore.offices[0].id);

  return <div className={classNames(styles.OfficeList, {}, [className])}></div>;
};

export { OfficeList };
