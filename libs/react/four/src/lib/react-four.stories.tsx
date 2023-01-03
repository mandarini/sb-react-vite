import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactFour } from './react-four';

const Story: ComponentMeta<typeof ReactFour> = {
  component: ReactFour,
  title: 'ReactFour',
};
export default Story;

const Template: ComponentStory<typeof ReactFour> = (args) => (
  <ReactFour {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
