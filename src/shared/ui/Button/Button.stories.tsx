// import type { Meta, StoryObj } from '@storybook/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { Button, ThemeButton } from './Button';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import StyleDecorator from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Text',
};
Primary.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];
export const Clear = Template.bind({});
Clear.args = {
	children: 'Text',
	theme: ThemeButton.CLEAR,
};
Clear.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];
export const Outline = Template.bind({});
Outline.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE,
};
Outline.decorators = [ThemeDecorator(Theme.DARK), StyleDecorator];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.LIGHT), StyleDecorator];
