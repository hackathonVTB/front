import { classNames } from '@/shared';
import styles from './sidebar.module.scss';
import { ReactNode } from 'react';

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

const Sidebar = (props: SidebarProps) => {
  const { className, children } = props;

  return (
    <div className={classNames(styles.Sidebar, {}, [className])}>
      {children}
    </div>
  );
};

export { Sidebar };
