import { classNames, HStack, VStack } from '@/shared';
import styles from './notification-modal.module.scss';
import { Modal } from '@/shared/ui/modal';
import { Suspense, useState } from 'react';
import { Loader } from '@/shared/ui/loader/loader.tsx';
import Button from '@/shared/ui/button/button.tsx';
import { useLocalStore } from '@/entities/service/model';

interface NotificationModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal = (props: NotificationModalProps) => {
  const { className, isOpen, onClose } = props;
  const [phone, setPhone] = useState<string>();
  const [addNotification, setAddNotification] = useState(false);
  const { serviceSelecterStore } = useLocalStore();

  return (
    <Modal
      className={classNames(styles.NotificationModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<Loader />}>
        <VStack gap={'8'}>
          <span>Вы забронировали услугу</span>
          <span>Хотите получить напоминание?</span>
          {!addNotification && (
            <HStack
              maxWidth
              align={'center'}
              justify={'center'}
              gap={'24'}
            >
              <Button
                onClick={() => {
                  setAddNotification(true);
                }}
              >
                ДА
              </Button>
              <Button
                onClick={() => {
                  setAddNotification(false);
                  onClose();
                }}
              >
                Нет
              </Button>
            </HStack>
          )}
          {addNotification && (
            <>
              <input
                value={phone}
                placeholder="+7 *** *** ** **"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button
                onClick={() => {
                  if (phone?.length === 11) {
                    serviceSelecterStore.addReservationNitofy({
                      reservation_id: serviceSelecterStore.reservation || 0,
                      phone_number: phone,
                    });
                  }
                }}
              >
                Отправить
              </Button>
            </>
          )}
        </VStack>
      </Suspense>
    </Modal>
  );
};

export { NotificationModal };
