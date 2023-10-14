import { classNames } from '@/shared';
import styles from './first.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface FirstProps {
  className?: string;
  onToggleShowSecond: Dispatch<SetStateAction<boolean>>;
}

const First = (props: FirstProps) => {
  const { className, onToggleShowSecond } = props;

  return (
    <div className={classNames(styles.First, {}, [className])}>
      Нужна услуга?
      <button onClick={() => onToggleShowSecond(true)}>Yes</button>
      <button>Now</button>
    </div>
  );
};

export { First };
