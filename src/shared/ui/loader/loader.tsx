import { classNames, VtbRoundedLogo } from '@/shared';
import styles from './loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <img
      src={VtbRoundedLogo}
      className={classNames(styles.Loader, {}, [className])}
    />
  );
};

export { Loader };
