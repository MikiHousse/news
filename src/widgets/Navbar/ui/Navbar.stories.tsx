import { ComponentStory, ComponentMeta, Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	args: {},
};
Light.decorators = [ThemeDecorator(Theme.DARK), RouterDecorator];
export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.LIGHT), RouterDecorator];
