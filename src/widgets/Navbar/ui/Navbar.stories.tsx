import { ComponentStory, ComponentMeta, Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';

const meta: Meta<typeof Navbar> = {
	title: 'widget/Navbar',
	component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
