import { Flex, FlexProps } from '@/shared/ui/stack/flex/flex.tsx';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  return (
    <Flex
      direction="row"
      {...props}
    />
  );
};
