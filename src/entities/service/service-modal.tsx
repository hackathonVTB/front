import { classNames } from '@/shared';
import styles from './service.module.scss';
import { First } from '@/entities/service/ui/first/first.tsx';
import { useState } from 'react';
import { Second } from '@/entities/service/ui/second/second.tsx';
import { observer } from 'mobx-react-lite';

interface IndexProps {
  className?: string;
}

const ServiceModal = observer((props: IndexProps) => {
  const { className } = props;
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className={classNames(styles.Index, {}, [className])}>
      {!showSecond && <First onToggleShowSecond={setShowSecond} />}
      {showSecond && <Second onToggleShowSecond={setShowSecond} />}
    </div>
  );
});

export { ServiceModal };
