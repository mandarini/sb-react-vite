import { render } from '@testing-library/react';

import ReactFive from './react-five';

describe('ReactFive', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactFive />);
    expect(baseElement).toBeTruthy();
  });
});
