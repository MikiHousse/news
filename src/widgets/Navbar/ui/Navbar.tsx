import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import BurgerMenu from 'shared/assets/icons/burger-menu.svg';
interface NavbarProps {
	className?: string;
	onToggle: () => void;
}

export const Navbar = ({ className, onToggle }: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button className={cls.menuBtn} data-testid='sidebar-toggle' onClick={() => onToggle()}>
				<BurgerMenu />
			</Button>
			<div className={cls.links}></div>
		</div>
	);
};
