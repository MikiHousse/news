import { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof AppLink> = {
	title: 'shared/AppLink',
	component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Light: Story = {
	args: { children: 'Text', theme: AppLinkTheme.PRIMARY },
};
Light.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export const Dark: Story = {
	args: { children: 'Text', theme: AppLinkTheme.PRIMARY },
};
Dark.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
