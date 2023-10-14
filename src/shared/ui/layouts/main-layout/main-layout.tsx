import { classNames } from '@/shared';
import styles from './main-layout.module.scss';
import { ReactNode } from 'react';

interface MainLayoutProps {
  className?: string;
  navbar: ReactNode;
  content: ReactNode;
  leftSidebar?: ReactNode;
  rightSidebar?: ReactNode;
  drower?: ReactNode;
  rightDownButton?: ReactNode;
  toggleTypeService?: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const {
    className,
    navbar,
    leftSidebar,
    content,
    drower,
    rightSidebar,
    rightDownButton,
    toggleTypeService,
  } = props;

  return (
    <div className={classNames(styles.MainLayout, {}, [className])}>
      <div className={styles.navbar}>{navbar}</div>
      {leftSidebar && <div className={styles.leftSidebar}>{leftSidebar}</div>}
      {rightSidebar && (
        <div className={styles.rightSidebar}>{rightSidebar}</div>
      )}
      <div className={styles.content}>{content}</div>
      {drower && <div className={styles.drower}>{drower}</div>}
      {rightDownButton && (
        <div className={styles.rightDownButton}>{rightDownButton}</div>
      )}
      {toggleTypeService && (
        <div className={styles.toggleTypeService}>{toggleTypeService}</div>
      )}
    </div>
  );
};

export { MainLayout };
