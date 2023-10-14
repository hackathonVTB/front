import { classNames } from '@/shared';
import styles from './toggle.module.scss';

interface ToggleProps {
  className?: string;
}

const Toggle = (props: ToggleProps) => {
  const { className } = props;

  return <div className={classNames(styles.Toggle, {}, [className])}>Банк</div>;
};

export { Toggle };
