import { classNames } from '@/shared';
import styles from './office-list.module.scss';
import { fromLonLat } from 'ol/proj';
import { observer } from 'mobx-react-lite';
import useSuitOffices from '@/shared/hooks/useSuitOffices';
import VTBLogo from '@/shared/assets/vtb-rounded-logo.svg';
import { useLocalPointsStore } from '@/entities/officePoints/model/store/use-local-stores';
import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';
import { configLoadStat } from '../module/configLoadStat';

interface OfficeListProps {
  className?: string;
}

const OfficeList = observer((props: OfficeListProps) => {
  const { className } = props;
  const { officesPointsStore, isOpenStore } = useLocalPointsStore();
  const { isLoading } = useSuitOffices([37.61556, 55.75222]);

  const onClickItem = (office: IOfficesSide) => {
    officesPointsStore.setView({
      center: fromLonLat([office.longitude, office.latitude]),
      zoom: 17,
    });
    isOpenStore.setIsOpen(
      true,
      fromLonLat([office.longitude, office.latitude]),
    );
  };
  if (isLoading) {
    <div>...isLoading</div>;
  }

  return (
    <div className={classNames(styles.root, {}, [className])}>
      {officesPointsStore.offices.map((office) => {
        const color = configLoadStat(office.load_rate);
        return (
          <div
            onClick={() => onClickItem(office)}
            key={office.id}
            className={styles.listItem}
          >
            <img src={VTBLogo} />
            <div className={styles.wrapperText}>
              <span className={styles.textList}>{office.address}</span>
            </div>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: '100%',
                backgroundColor: color,
              }}
            />
          </div>
        );
      })}
    </div>
  );
});

export { OfficeList };