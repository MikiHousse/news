import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import type { Preview } from '@storybook/react';
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const preview: Preview = {
	parameters: {
		decorators: [StyleDecorator, ThemeDecorator(Theme.DARK), RouterDecorator],
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
