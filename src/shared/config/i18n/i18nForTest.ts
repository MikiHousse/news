import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
	lng: 'eu',
	fallbackLng: 'eu',
	debug: false,

	interpolation: {
		escapeValue: false, // not needed for react!!
	},
	resources: { ru: { translations: {} } },
});

export default i18n;
