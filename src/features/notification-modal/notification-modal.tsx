import { classNames, HStack, Text, VStack } from '@/shared';
import styles from './notification-modal.module.scss';
import { Modal } from '@/shared/ui/modal';
import { Suspense, useState } from 'react';
import { Loader } from '@/shared/ui/loader/loader.tsx';
import Button from '@/shared/ui/button/button.tsx';
import { useLocalStore } from '@/entities/service/model';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


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
          {!addNotification && (
            <VStack gap={'4'}>
              <Text title={'Вы забронировали услугу!'} />
              <Text text={'Хотите получить напоминание?'} />
            </VStack>
          )}
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
                <Text
                  variant={'invert'}
                  text={'Да'}
                />
              </Button>
              <Button
                view={'withBorder'}
                onClick={() => {
                  setAddNotification(false);
                  onClose();
                }}
              >
                <Text
                  variant={'primary'}
                  text={'Нет'}
                />
              </Button>
            </HStack>
          )}
          {addNotification && (
            <>

              <PhoneInput
                country={'ru'}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              <HStack gap={'8'}>
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
                  <Text
                    variant={'invert'}
                    text={'Отправить'}
                  />
                </Button>

                <Button
                  view={'withBorder'}
                  onClick={() => {
                    setAddNotification(false);
                    onClose();
                  }}
                >
                  <Text
                    variant={'primary'}
                    text={'Отмена'}
                  />
                </Button>
              </HStack>
            </>
          )}
        </VStack>
      </Suspense>
    </Modal>
  );
};

export { NotificationModal };
