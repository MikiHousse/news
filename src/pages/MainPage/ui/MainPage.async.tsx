import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // Написано только ддя тестирования
  setTimeout(() => resolve(import('./MainPage')), 500);
}));
