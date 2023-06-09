import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import BurgerMenu from 'shared/assets/icons/burger-menu.svg';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
interface NavbarProps {
	className?: string;
	onToggle: () => void;
}

export const Navbar = ({ className, onToggle }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button className={cls.menuBtn} data-testid='sidebar-toggle' onClick={() => onToggle()}>
				<BurgerMenu />
			</Button>
			<Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onShowModal}>
				{t('Войти')}
			</Button>
			<LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
		</div>
	);
};
