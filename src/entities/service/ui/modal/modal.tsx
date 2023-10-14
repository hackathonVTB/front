import { classNames, HStack } from '@/shared';
import styles from './modal.module.scss';
import { useEffect, useState } from 'react';
import { useLocalStore } from '../../model/store/use-local-stores.ts';
import { observer } from 'mobx-react-lite';
import { Loader } from '@/shared/ui/loader/loader.tsx';

interface SecondProps {
  className?: string;
}

const Modal = observer((props: SecondProps) => {
  const { className } = props;
  const [categoreId, setCategoreId] = useState(0);
  const { serviceSelecterStore } = useLocalStore();

  useEffect(() => {
    serviceSelecterStore.fetchCategories();
  }, []);

  useEffect(() => {
    if (serviceSelecterStore.categories.length === 0) return;
    serviceSelecterStore.fetchSubcategories(categoreId);
  }, [categoreId]);

  if (
    serviceSelecterStore.categoriesIsLoading ||
    serviceSelecterStore.subcategoriesIsLoading
  ) {
    return (
      <HStack
        className={classNames(styles.Second, {}, [className])}
        maxWidth
        maxHeight
        align={'center'}
        justify={'center'}
      >
        <Loader />
      </HStack>
    );
  }

  return (
    <div className={classNames(styles.Second, {}, [className])}>
      <select
        className={styles.select}
        onChange={(e) => {
          setCategoreId(+e.target.value);
        }}
      >
        {serviceSelecterStore.categories.map((categore) => (
          <option
            className={styles.option}
            key={categore.id}
            value={categore.id}
          >
            {categore.name}
          </option>
        ))}
      </select>
      {!!categoreId && (
        <select
          className={styles.select}
          onChange={(e) => console.log(e.target.value)}
        >
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
    </div>
  );
});

export { Modal };
