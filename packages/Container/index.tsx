// Component Container

import * as React from 'react';
import { View } from 'remax/wechat';
import clsx from 'clsx';
import './index.css';

interface AuContainerProps {
	className?: string;
	style?: React.CSSProperties;
}
const AuContainer: React.FC<AuContainerProps> = ({
	children,
	className,
	style,
}) => {
	const classNames = clsx('AuContainer', className);
	return (
		<View className={classNames} style={style && style}>
			{children}
		</View>
	);
};

export default AuContainer;
