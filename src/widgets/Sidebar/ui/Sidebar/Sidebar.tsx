import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';

interface SidebarProps {
	className?: string;
	collapsed?: boolean;
}
export const Sidebar = ({ className, collapsed }: SidebarProps) => {
	const { t } = useTranslation();
	return (
		<div
			data-testid='sidebar'
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<div className={cls.items}>
				<AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.main} className={cls.item}>
					<MainIcon className={cls.icon} />
					{!collapsed ? <span className={cls.link}>{t('Главная')}</span> : ''}
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={RoutePath.about} className={cls.item}>
					<AboutIcon className={cls.icon} />
					{!collapsed ? <span className={cls.link}> {t('О сайте')}</span> : ''}
				</AppLink>
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
