import { render } from '@testing-library/react';

import ReactOne from './react-one';

describe('ReactOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactOne />);
    expect(baseElement).toBeTruthy();
  });
});
