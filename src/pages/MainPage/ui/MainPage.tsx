import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
	const { t } = useTranslation();

	const [value, setValue] = useState('');
	const onChange = (value: string) => {
		setValue(value);
	};

	return (
		<div>
			{t('Главная страница')}
			<Input value={value} onChange={onChange} />
		</div>
	);
};

export default MainPage;
