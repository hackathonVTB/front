import { classNames } from '@/shared';
import styles from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return <div className={classNames(styles.Navbar, {}, [className])}></div>;
};

export { Navbar };
