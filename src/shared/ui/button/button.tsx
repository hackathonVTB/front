import { ButtonHTMLAttributes, CSSProperties, type FC } from 'react';
import styles from './button.module.scss';
import { classNames } from '@/shared';

export type ButtonView = 'primary' | 'secondary' | 'withBorder';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: ButtonView;
  disabled?: boolean;
  withIcon?: boolean;
  width?: number;
  height?: number;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className: currentClassName,
    type = 'button',
    view = 'primary',
    disabled = false,
    withIcon = false,
    width,
    height,
    ...otherProps
  } = props;

  const style: CSSProperties =
    width && height ? { width: `${width}px`, height: `${height}px` } : {};

  const className = classNames(styles.root, {}, [
    currentClassName,
    styles[`root_${view}`],
    withIcon ? styles['root_icon'] : '',
  ]);

  return (
    <button
      style={style}
      type={type}
      disabled={disabled}
      {...otherProps}
      className={className}
    >
      {children}
    </button>
  );
};
export default Button;
