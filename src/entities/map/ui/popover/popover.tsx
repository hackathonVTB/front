import { AnimationProvider, useAnimationLibs } from '@/shared';
import styles from './index.module.scss';
import { Coordinate } from 'ol/coordinate';
import { Point } from 'ol/geom';
import { ReactNode, memo, useCallback, useEffect } from 'react';
import { RLayerVector, RFeature, ROverlay } from 'rlayers';

interface PopoverProps {
  children: (close: () => void) => ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  coords: Coordinate;
}
const height = 50;
export const PopoverContent = memo((props: PopoverProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height, x: 390 }));
  const { isOpen, children, onClose, coords } = props;

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
      y: height,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.usePinch(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my] }) => {
      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openPopover();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <RLayerVector zIndex={5}>
      <RFeature geometry={new Point(coords)}>
        <ROverlay
          offset={[-2.5, -15]}
          positioning="bottom-center"
        >
          <Spring.a.div
            style={{
              display,
              bottom: `calc(-100vh + ${height - 100}px)`,
              y,
            }}
            {...bind()}
          >
            <div className={styles.root}>{children(close)}</div>
          </Spring.a.div>
        </ROverlay>
      </RFeature>
    </RLayerVector>
  );
});

const PopoverAsync = (props: PopoverProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <PopoverContent {...props} />;
};

export const Popover = (props: PopoverProps) => {
  return (
    <AnimationProvider>
      <PopoverAsync {...props} />
    </AnimationProvider>
  );
};
