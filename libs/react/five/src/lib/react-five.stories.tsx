import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactFive } from './react-five';

const Story: ComponentMeta<typeof ReactFive> = {
  component: ReactFive,
  title: 'ReactFive',
};
export default Story;

const Template: ComponentStory<typeof ReactFive> = (args) => (
  <ReactFive {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
