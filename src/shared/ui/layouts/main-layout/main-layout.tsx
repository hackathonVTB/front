import { classNames, VStack } from '@/shared';
import styles from './main-layout.module.scss';
import { ReactNode } from 'react';

interface MainLayoutProps {
  className?: string;
  navbar: ReactNode;
  content: ReactNode;
  leftSidebar?: ReactNode;
  drower?: ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { className, navbar, leftSidebar, content, drower } = props;

  return (
    <div className={classNames(styles.MainLayout, {}, [className])}>
      <div className={styles.navbar}>{navbar}</div>
      <div className={styles.leftSidebar}>{leftSidebar}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.drower}>{drower}</div>
    </div>
  );
};

export { MainLayout };
