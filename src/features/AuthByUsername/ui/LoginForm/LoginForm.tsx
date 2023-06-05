import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
	className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<Input className={cls.input} autofocus />
			<Input className={cls.input} autofocus />
			<Button className={cls.loginBtn}>Sing In</Button>
		</div>
	);
};

export default LoginForm;
