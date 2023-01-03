import { render } from '@testing-library/react';

import ReactThree from './react-three';

describe('ReactThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactThree />);
    expect(baseElement).toBeTruthy();
  });
});
