import { classNames, HStack } from '@/shared';
import styles from './toggle.module.scss';
import Button from '@/shared/ui/button/button.tsx';
import { Dispatch, SetStateAction } from 'react';

interface ToggleProps {
  className?: string;
  setToggle: Dispatch<SetStateAction<'office' | 'atms'>>;
  toggle: 'office' | 'atms';
}

const Toggle = (props: ToggleProps) => {
  const { className, setToggle, toggle } = props;

  return (
    <div className={classNames(styles.Toggle, {}, [className])}>
      <HStack
        maxWidth
        maxHeight
        justify={'center'}
        align={'center'}
      >
        <Button
          isActive={toggle === 'office'}
          onClick={() => setToggle('office')}
          view={'toggleButton'}
          width={140}
          height={44}
        >
          Отделения
        </Button>
        <Button
          isActive={toggle === 'atms'}
          onClick={() => setToggle('atms')}
          view={'toggleButton'}
          width={140}
          height={44}
        >
          Банкоматы
        </Button>
      </HStack>
    </div>
  );
};

export { Toggle };
