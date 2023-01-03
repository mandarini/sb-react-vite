import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactTwo } from './react-two';

const Story: ComponentMeta<typeof ReactTwo> = {
  component: ReactTwo,
  title: 'ReactTwo',
};
export default Story;

const Template: ComponentStory<typeof ReactTwo> = (args) => (
  <ReactTwo {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
