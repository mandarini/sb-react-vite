import { render } from '@testing-library/react';

import ReactFour from './react-four';

describe('ReactFour', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFour />);
    expect(baseElement).toBeTruthy();
  });
});
