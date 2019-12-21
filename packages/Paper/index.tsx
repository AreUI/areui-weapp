// Component Paper

import * as React from 'react';
import { View } from 'remax/wechat';
import clsx from 'clsx';
import './index.css';

interface AuPaperProps {
	className?: string;
	style?: React.CSSProperties;
	boxShadow?:
		| 0
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| 13
		| 14
		| 15
		| 16
		| 17
		| 18
		| 19
		| 20
		| 21
		| 22
		| 23
		| 24;
	rounded?:
		| 'rounded'
		| 'top'
		| 'top-left'
		| 'top-right'
		| 'right'
		| 'bottom'
		| 'bottom-left'
		| 'bottom-right'
		| 'left'
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'circle'
		| 'pill'
		| 'none';
}
const AuPaper: React.FC<AuPaperProps> = ({
	children,
	className,
	style,
	boxShadow = 1,
	rounded = 'rounded',
}) => {
	return (
		<View
			className={clsx(
				'AuPaper',
				className,
				rounded != 'none' &&
					rounded != 'rounded' &&
					`AuPaper-rounded-${rounded}`,
				{ 'AuPaper-rounded': rounded == 'rounded' },
				boxShadow && `AuPaper-shadow${boxShadow}`
			)}
			style={style && style}
		>
			{children}
		</View>
	);
};

export default AuPaper;
