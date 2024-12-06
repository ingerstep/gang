import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './HamburgerButton.module.scss';
import cn from 'classnames';

interface HamburgerButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: boolean;
}

export const HamburgerButton = ({ active, ...props }: HamburgerButtonProps) => {
  return (
    <div
      className={cn(styles.button, {
        [styles.active]: active,
      })}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
