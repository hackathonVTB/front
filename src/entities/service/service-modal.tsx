import { classNames } from '@/shared';
import styles from './service.module.scss';
import { Modal } from '@/entities/service/ui/modal/modal.tsx';
import { observer } from 'mobx-react-lite';

interface IndexProps {
  className?: string;
}

const ServiceModal = observer((props: IndexProps) => {
  const { className } = props;
  // const [showSecond, setShowSecond] = useState(false);

  return (
    <div className={classNames(styles.Index, {}, [className])}>
      {/*{!showSecond && <First onToggleShowSecond={setShowSecond} />}*/}
      {/*{showSecond && <Modal onToggleShowSecond={setShowSecond} />}*/}
      <Modal />
    </div>
  );
});

export { ServiceModal };
