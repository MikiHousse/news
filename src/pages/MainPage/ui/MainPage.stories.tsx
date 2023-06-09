import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args: any) => <MainPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
