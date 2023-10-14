import { Overlay, Portal, useAnimationLibs } from '@/shared';
import styles from './index.module.scss';
import { ReactNode, memo, useCallback, useEffect } from 'react';

interface PopoverProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Popover = memo((props: PopoverProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: 250 }));
  const { isOpen, onClose, children } = props;

  const openPopover = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openPopover();
    }
  }, [api, isOpen, openPopover]);

  const close = (velocity = 0) => {
    api.start({
      y: 250,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > 250 * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openPopover();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < 250 ? 'block' : 'none'));

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={styles.root}>
        <Overlay onClick={close} />
        <Spring.a.div
          style={{
            display,
            bottom: `calc(-100vh + ${250 - 100}px)`,
            y,
          }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});
