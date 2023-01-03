import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactOne } from './react-one';

const Story: ComponentMeta<typeof ReactOne> = {
  component: ReactOne,
  title: 'ReactOne',
};
export default Story;

const Template: ComponentStory<typeof ReactOne> = (args) => (
  <ReactOne {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
