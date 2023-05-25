import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  //@ts-ignore
  // Написано только ддя тестирования 
  setTimeout(() => resolve(import('./AboutPage')), 500)
}));