import { classNames } from '@/shared';
import styles from './index.module.scss';
import { First } from '@/pages/not-found-page/ui/components/first/first.tsx';
import { useState } from 'react';
import { Second } from '@/pages/not-found-page/ui/components/second/second.tsx';
import { observer } from 'mobx-react-lite';

interface IndexProps {
  className?: string;
}

const Index = observer((props: IndexProps) => {
  const { className } = props;
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className={classNames(styles.Index, {}, [className])}>
      {!showSecond && <First onToggleShowSecond={setShowSecond} />}
      {showSecond && <Second onToggleShowSecond={setShowSecond} />}
    </div>
  );
});

export { Index };
