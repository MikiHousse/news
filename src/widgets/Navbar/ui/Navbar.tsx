import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import BurgerMenu from 'shared/assets/icons/burger-menu.svg';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
interface NavbarProps {
	className?: string;
	onToggle: () => void;
}

export const Navbar = ({ className, onToggle }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button className={cls.menuBtn} data-testid='sidebar-toggle' onClick={() => onToggle()}>
				<BurgerMenu />
			</Button>
			<Button theme={ButtonTheme.CLEAR} className={cls.links} onClick={onToggleModal}>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Повседневная практика показывает, что сложившаяся структура организации играет важную роль в
				формировании позиций, занимаемых участниками в отношении поставленных задач? Дорогие друзья,
				начало повседневной работы по формированию позиции играет важную роль в формировании
				экономической целесообразности принимаемых решений?
			</Modal>
		</div>
	);
};
