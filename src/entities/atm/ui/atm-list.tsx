import { classNames } from '@/shared';
import styles from './atm-list.module.scss';
import { observer } from 'mobx-react-lite';
import atmBankLogo from '@/shared/assets/atm-banks-logo.svg';
import { useLocalAtmStore } from '../model/store';
import useSuitAtms from '@/shared/hooks/useSuitoAtms';

interface OfficeListProps {
  className?: string;
}

const AttmList = observer((props: OfficeListProps) => {
  const { className } = props;
  const { atmStore } = useLocalAtmStore();
  const { isLoading } = useSuitAtms([37.61556, 55.75222]);

  // const onClickItem = (office: IOfficesSide) => {
  //   officesPointsStore.setView({
  //     center: fromLonLat([office.longitude, office.latitude]),
  //     zoom: 17,
  //   });
  //   isOpenStore.setIsOpen(
  //     true,
  //     fromLonLat([office.longitude, office.latitude]),
  //     office,
  //   );
  // };

  if (isLoading) {
    <div>...isLoading</div>;
  }

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {atmStore.atms.map((atm) => {
        return (
          <div
            key={atm.id}
            className={styles.listItem}
          >
            <div className={styles.card}>
              <img src={atmBankLogo} />
              <div className={styles.wrapperText}>
                <span className={styles.textList}>
                  {atm.address ? atm.address : `Банкомат ВТБ ${atm.id}`}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export { AttmList };
