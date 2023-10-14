import { classNames } from '@/shared';
import styles from './service.module.scss';
import { Modal } from '@/entities/service/ui/modal/modal.tsx';
import { observer } from 'mobx-react-lite';

interface IndexProps {
  className?: string;
}

const ServiceModal = observer((props: IndexProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.Index, {}, [className])}>
      <Modal />
    </div>
  );
});

export { ServiceModal };
