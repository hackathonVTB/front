import { classNames } from '@/shared';
import styles from './atm-list.module.scss';
import { fromLonLat, toLonLat } from 'ol/proj';
import { observer } from 'mobx-react-lite';
import atmBankLogo from '@/shared/assets/atm-banks-logo.svg';
import { useLocalAtmStore } from '../model/store';
import useSuitAtms from '@/shared/hooks/useSuitoAtms';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { IAtms } from '@/shared/interface/atms/IAtms';
import { useLocalGeoStore } from '@/entities/map/model/store';

interface OfficeListProps {
  className?: string;
}

const AttmList = observer((props: OfficeListProps) => {
  const { className } = props;
  const { atmStore } = useLocalAtmStore();
  const { officesPointsStore } = useLocalPointsStore();
  const { geoStore } = useLocalGeoStore();
  const coord = toLonLat(geoStore.pos.getCoordinates());
  const { isLoading } = useSuitAtms([coord[0], coord[1]]);

  const onClickItem = (atm: IAtms) => {
    officesPointsStore.setView({
      center: fromLonLat([atm.longitude, atm.latitude]),
      zoom: 17,
    });
  };

  if (isLoading) {
    <div>...isLoading</div>;
  }

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {atmStore.atms.map((atm) => {
        return (
          <div
            key={atm.id}
            onClick={() => onClickItem(atm)}
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
            <div>
              <span className={styles.loader}>
                Растояние до банкомата:
                <div className={styles.chips}>{atm.distance} км</div>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export { AttmList };
