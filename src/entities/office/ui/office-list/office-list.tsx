import { classNames } from '@/shared';
import styles from './office-list.module.scss';

interface OfficeListProps {
  className?: string;
}

const OfficeList = (props: OfficeListProps) => {
  const { className } = props;

  return <div className={classNames(styles.OfficeList, {}, [className])}></div>;
};

export { OfficeList };
