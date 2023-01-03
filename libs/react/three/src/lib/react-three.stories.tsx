import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactThree } from './react-three';

const Story: ComponentMeta<typeof ReactThree> = {
  component: ReactThree,
  title: 'ReactThree',
};
export default Story;

const Template: ComponentStory<typeof ReactThree> = (args) => (
  <ReactThree {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
