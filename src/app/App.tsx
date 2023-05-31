import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';

const App = () => {
	const { theme } = useTheme();
	const [collapsed, setCollapsed] = useState(true);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar onToggle={onToggle} />
				<div className='content-page'>
					<Sidebar collapsed={collapsed} />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
