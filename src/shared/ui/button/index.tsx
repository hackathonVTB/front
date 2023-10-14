import { ButtonHTMLAttributes, type FC } from 'react';
import styles from './index.module.scss';
import { classNames } from '@/shared';
export type ButtonView = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  view?: ButtonView;
  disabled?: boolean;
  withIcon?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className: currentClassName,
    type = 'button',
    view = 'primary',
    disabled = false,
    withIcon = false,
    ...otherProps
  } = props;

  const className = classNames(styles.root, {}, [
    currentClassName,
    styles[`root_${view}`],
    withIcon ? styles['root_icon'] : '',
  ]);

  return (
    <button
      type={type}
      disabled={disabled}
      {...otherProps}
      className={className}
    >
      <span className={styles.text}>{children}</span>
    </button>
  );
};
export default Button;
