import styles from './styles.module.scss';
import { EColor, ITextProps, Typography } from '../Typography';
import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  mode?: 'white' | 'black';
  typography?: ITextProps;
}

export const Button = ({ children, typography, mode = 'white', ...props }: ButtonProps) => {
  const { className } = props;

  const classes = cn(className, styles['button'], styles[`button-${mode}`]);

  return (
    <button {...props} className={classes}>
      <Typography As="span" size={32} color={mode === 'black' ? EColor.white : EColor.black} font="montserrat" {...typography}>
        {children}
      </Typography>
    </button>
  );
};
