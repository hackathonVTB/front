import { classNames } from '@/shared';
import styles from './not-found-page.module.scss';
import { ServiceModal } from '@/entities/service/service-modal.tsx';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      <ServiceModal />
    </div>
  );
};

export default NotFoundPage;
