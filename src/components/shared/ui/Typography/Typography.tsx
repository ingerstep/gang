import React from 'react';
import cl from './Typography.module.scss';
import classNames from 'classnames';

export type TSizes = 120 | 80 | 40 | 32 | 20 | 16 | 14 | 12;
type TFont = 'rostov' | 'montserrat';

export enum EColor {
  black = 'black',
  black2 = 'black2',
  gray = 'gray',
  gray2 = 'gray2',
  gray3 = 'gray3',
  white = 'white',
}

export interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  className?: string;
  children?: React.ReactNode;
  size: TSizes;
  bold?: boolean;
  uppercase?: boolean;
  underline?: boolean;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColor;
  font?: TFont;
  style?: React.CSSProperties;
  refer?: any;
  id?: string;
}

export const Typography = (props: ITextProps) => {
  const {
    As = 'span',
    className,
    children,
    color = EColor.black,
    bold = false,
    underline = false,
    uppercase = false,
    size,
    mobileSize,
    desktopSize,
    tabletSize,
    font = 'montserrat',
    style,
    refer,
    id,
  } = props;

  const classes = classNames(
    className,
    cl[`font-${font}`],
    cl[`s${size}`],
    cl[color],
    { [cl.bold]: bold },
    { [cl.underline]: underline },
    { [cl.uppercase]: uppercase },
    { [cl[`m${mobileSize}`]]: mobileSize },
    { [cl[`d${desktopSize}`]]: desktopSize },
    { [cl[`t${tabletSize}`]]: tabletSize },
  );

  return (
    <As ref={refer} style={style} className={classes} id={id}>
      {children}
    </As>
  );
};
