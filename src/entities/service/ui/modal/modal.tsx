import { classNames, HStack, Text, VStack } from '@/shared';
import styles from './modal.module.scss';
import { useEffect } from 'react';
import { useLocalStore } from '@/entities/service/model';
import { useLocalGeoStore } from '@/entities/map/model/store';
import { observer } from 'mobx-react-lite';
import { Loader } from '@/shared/ui/loader/loader.tsx';
import Button from '@/shared/ui/button/button.tsx';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { toLonLat } from 'ol/proj';

interface SecondProps {
  className?: string;
}

const Modal = observer((props: SecondProps) => {
  const { className } = props;
  const { serviceSelecterStore, objectForm } = useLocalStore();
  const { geoStore } = useLocalGeoStore();
  const { officesPointsStore } = useLocalPointsStore();

  useEffect(() => {
    serviceSelecterStore.fetchCategories();
  }, []);

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
          serviceSelecterStore.fetchSubcategories(+e.target.value);
        }}
      >
        {serviceSelecterStore.categories.map((categore) => (
          <option
            className={styles.option}
            key={categore.id}
            value={categore.id}
          >
            <Text
              variant={'invert'}
              text={categore.name}
            />
          </option>
        ))}
      </select>
      {!!serviceSelecterStore.subcategories &&
        !!serviceSelecterStore.subcategories.length && (
          <select
            className={styles.select}
            onChange={(e) =>
              serviceSelecterStore.fetchServices(+e.target.value)
            }
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
      <VStack
        style={{ marginLeft: '8px', marginTop: '8px', paddingBottom: '8px' }}
        gap={'8'}
        maxWidth
        align={'start'}
      >
        {serviceSelecterStore.services.map((service) => (
          <Button
            width={320}
            height={48}
            onClick={() => {
              objectForm.setServices(service);
              const coord = toLonLat(geoStore.pos.getCoordinates());
              serviceSelecterStore
                .fetchAvailableOffices(
                  service.id.toString(),
                  coord[0],
                  coord[1],
                )
                .finally(() =>
                  officesPointsStore.setOffices(
                    serviceSelecterStore.availableOffices,
                  ),
                );
            }}
            key={service.id}
          >

            <HStack justify={'start'}>
              <Text
                variant={'invert'}
                text={service.name}
                bold={true}
              />
            </HStack>

          </Button>
        ))}
      </VStack>
    </div>
  );
});

export { Modal };
