import { classNames, HStack } from '@/shared';
import styles from './toggle.module.scss';
import Button from '@/shared/ui/button/button.tsx';
import { observer } from 'mobx-react-lite';
import { useTogleLocalStore } from '@/entities/toggle/module';
import { Toogle } from '@/entities/toggle/module/types/ITogle';

interface ToggleProps {
  className?: string;
}

const Toggle = observer((props: ToggleProps) => {
  const { className } = props;
  const { tooglStore } = useTogleLocalStore();

  return (
    <div className={classNames(styles.Toggle, {}, [className])}>
      <HStack
        maxWidth
        maxHeight
        justify={'center'}
        align={'center'}
      >
        <Button
          isActive={tooglStore.toogle === Toogle.Office}
          onClick={() => tooglStore.setToogle(Toogle.Office)}
          view={'toggleButton'}
          width={140}
          height={44}
        >
          <span className={styles.text}>Отделения</span>
        </Button>
        <Button
          isActive={tooglStore.toogle === Toogle.Atm}
          onClick={() => tooglStore.setToogle(Toogle.Atm)}
          view={'toggleButton'}
          width={140}
          height={44}
        >
          <span className={styles.text}>Банкоматы</span>
        </Button>
      </HStack>
    </div>
  );
});

export { Toggle };
