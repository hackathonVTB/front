import { classNames } from '@/shared';
import styles from './not-found-page.module.scss';
import { Index } from '@/pages/not-found-page/ui';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      <Index />
    </div>
  );
};

export default NotFoundPage;
