import { classNames } from '@/shared';
import styles from './not-found-page.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      Not found
    </div>
  );
};

export default NotFoundPage;
