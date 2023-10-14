import { classNames, HStack } from '@/shared';
import styles from './first.module.scss';
import { Dispatch, SetStateAction } from 'react';
import Button from '@/shared/ui/button/button.tsx';

interface FirstProps {
  className?: string;
  onToggleShowSecond: Dispatch<SetStateAction<boolean>>;
}

const First = (props: FirstProps) => {
  const { className, onToggleShowSecond } = props;

  return (
    <div className={classNames(styles.First, {}, [className])}>
      Нужна услуга?
      <Button
        width={56}
        height={40}
        onClick={() => onToggleShowSecond(true)}
      >
        <HStack
          maxWidth
          align={'center'}
          justify={'center'}
        >
          Да
        </HStack>
      </Button>
      <Button
        width={56}
        height={40}
        view={'withBorder'}
      >
        <HStack
          maxWidth
          align={'center'}
          justify={'center'}
        >
          Нет
        </HStack>
      </Button>
    </div>
  );
};

export { First };
