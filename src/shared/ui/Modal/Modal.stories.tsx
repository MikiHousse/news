import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Modal> = {
	title: 'widget/Modal',
	component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Dark: Story = {
	args: {
		isOpen: true,
		children:
			'Повседневная практика показывает, что сложившаяся структура организации играет важную роль fverferf',
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const Light: Story = {
	args: {
		isOpen: true,
		children:
			'Повседневная практика показывает, что сложившаяся структура организации играет важную роль fverferf',
	},
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];
