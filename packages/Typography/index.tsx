// Component Typography
import * as React from 'react';
import { Text } from 'remax/wechat';
import clsx from 'clsx';
import './index.css';

interface AuTypographyProps {
  className?: string;
  style?: React.CSSProperties;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  vertical?:
    | 'inherit'
    | 'baseline'
    | 'top'
    | 'middle'
    | 'bottom'
    | 'text-bottom'
    | 'text-top';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'error'
    | 'dark'
    | 'light'
    | 'white'
    | 'black'
    | 'warning'
    | 'initial';
  bgColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'info'
    | 'error'
    | 'dark'
    | 'light'
    | 'white'
    | 'black'
    | 'warning'
    | 'initial';
  display?: 'initial' | 'block' | 'inline';
  gutterBottom?: boolean;
  noWrap?: boolean | number;
  paragraph?: boolean;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'display1'
    | 'display2'
    | 'display3'
    | 'display4'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'inherit';
  selectable?: boolean;
}

const AuTypography: React.FC<AuTypographyProps> = ({
  children,
  className,
  style,
  align = 'inherit',
  vertical = 'inherit',
  color = 'initial',
  bgColor = 'initial',
  display = 'inline',
  gutterBottom = false,
  noWrap = false,
  paragraph = false,
  variant = 'body1',
  selectable,
}) => {
  return (
    <Text
      className={clsx(
        'AuTypography',
        className,
        align !== 'inherit' && `AuTypography-text-${align}`,
        color !== 'initial' && `AuTypography-text-${color}`,
        bgColor !== 'initial' && `AuTypography-bg-${bgColor}`,
        vertical !== 'inherit' && `AuTypography-align-${vertical}`,
        display !== 'inline' && `AuTypography-display-${display}`,
        variant !== 'inherit' && `AuTypography-${variant}`,
        { 'AuTypography-gutter-bottom': gutterBottom },
        typeof noWrap == 'number' &&
          noWrap != 1 &&
          `AuTypography-text-nowrap${noWrap}`,
        {
          'AuTypography-no-wrap':
            (typeof noWrap == 'boolean' && noWrap === true) || noWrap == 1,
        },
        { 'AuTypography-paragraph': paragraph }
      )}
      style={style && style}
      selectable={selectable && selectable}
    >
      {children}
    </Text>
  );
};

export default AuTypography;
