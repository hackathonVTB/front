import { classNames, CloseIcon } from '@/shared';
import styles from './sidebar.module.scss';
import { ReactNode } from 'react';

interface SidebarProps {
  className?: string;
  children?: ReactNode;
  closeIcon?: boolean;
  onCloseClick?: () => void;
}

const Sidebar = (props: SidebarProps) => {
  const { className, children, closeIcon = false, onCloseClick } = props;

  return (
    <div className={classNames(styles.Sidebar, {}, [className])}>
      {closeIcon && (
        <img
          className={styles.close}
          onClick={onCloseClick}
          src={CloseIcon}
          alt={'close'}
        />
      )}
      {children}
    </div>
  );
};

export { Sidebar };
