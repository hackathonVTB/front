import { classNames } from '@/shared';
import styles from './second.module.scss';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useLocalStore } from '../../../model/store/use-local-stores.ts';
import { observer } from 'mobx-react-lite';

interface SecondProps {
  className?: string;
  onToggleShowSecond: Dispatch<SetStateAction<boolean>>;
}

const Second = observer((props: SecondProps) => {
  const { className, onToggleShowSecond } = props;
  const [categoreId, setCategoreId] = useState(0);
  const { serviceSelecterStore } = useLocalStore();

  useEffect(() => {
    serviceSelecterStore.fetchCategories();
  }, []);

  useEffect(() => {
    if (serviceSelecterStore.categories.length === 0) return;
    serviceSelecterStore.fetchSubcategories(categoreId);
  }, [categoreId]);

  if (serviceSelecterStore.categoriesIsLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className={classNames(styles.Second, {}, [className])}>
      <select
        onChange={(e) => {
          setCategoreId(+e.target.value);
        }}
      >
        {serviceSelecterStore.categories.map((categore) => (
          <option
            key={categore.id}
            value={categore.id}
          >
            {categore.name}
          </option>
        ))}
      </select>
      {!!categoreId && (
        <select onChange={(e) => console.log(e.target.value)}>
          {serviceSelecterStore.subcategories.map((subcategorie) => (
            <option
              key={subcategorie.id}
              value={subcategorie.id}
            >
              {subcategorie.name}
            </option>
          ))}
        </select>
      )}
      <button onClick={() => onToggleShowSecond(false)}>close</button>
    </div>
  );
});

export { Second };
