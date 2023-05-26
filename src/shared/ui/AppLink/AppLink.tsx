import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'RED',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
	return (
		<Link {...otherProps} to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
			{children}
		</Link>
	);
};