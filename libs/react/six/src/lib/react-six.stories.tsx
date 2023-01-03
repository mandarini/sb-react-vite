import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactSix } from './react-six';

const Story: ComponentMeta<typeof ReactSix> = {
  component: ReactSix,
  title: 'ReactSix',
};
export default Story;

const Template: ComponentStory<typeof ReactSix> = (args) => (
  <ReactSix {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
