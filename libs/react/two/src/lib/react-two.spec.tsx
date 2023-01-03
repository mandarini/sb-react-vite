import { render } from '@testing-library/react';

import ReactTwo from './react-two';

describe('ReactTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTwo />);
    expect(baseElement).toBeTruthy();
  });
});
