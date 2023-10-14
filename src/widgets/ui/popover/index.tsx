import { Portal } from '@/shared';
import styles from './index.module.scss';

const Popover = () => {
  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={styles.root}></div>
    </Portal>
  );
};
export default Popover;
