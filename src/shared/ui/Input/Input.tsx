import { classNames } from 'shared/lib/classNames/classNames';
import cls from './input.module.scss';
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
	const { className, value, onChange, type = 'text', autofocus, ...otherProps } = props;
	const ref = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	return (
		<div className={classNames(cls.InputWrapper, {}, [className])}>
			<input
				ref={ref}
				type={type}
				value={value}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				{...otherProps}
			/>
		</div>
	);
});
