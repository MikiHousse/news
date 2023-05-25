import { Suspense } from 'react';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => {
					<Route key={path} path={path} element={<div>{element}</div>}></Route>;
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
