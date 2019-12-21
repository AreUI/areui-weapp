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
	const classNames = clsx('AuTypography', className, {
		[`AuTypography-text-${align}`]: align !== 'inherit',
		[`AuTypography-text-${color}`]: color !== 'initial',
		[`AuTypography-bg-${bgColor}`]: bgColor !== 'initial',
		[`AuTypography-align-${vertical}`]: vertical !== 'inherit',
		[`AuTypography-display-${display}`]: display !== 'inline',
		[`AuTypography-${variant}`]: variant !== 'inherit',
		[`AuTypography-text-nowrap${noWrap}`]:
			typeof noWrap == 'number' && noWrap != 1,
		'AuTypography-no-wrap':
			(typeof noWrap == 'boolean' && noWrap === true) || noWrap == 1,
		'AuTypography-gutter-bottom': gutterBottom,
		'AuTypography-paragraph': paragraph,
	});
	return (
		<Text
			className={classNames}
			style={style && style}
			selectable={selectable && selectable}
		>
			{children}
		</Text>
	);
};

export default AuTypography;
