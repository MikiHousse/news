import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (StoryComponent: Story) => {
	return (
		<BrowserRouter>
			<StoryComponent />
		</BrowserRouter>
	);
};

export default RouterDecorator;
