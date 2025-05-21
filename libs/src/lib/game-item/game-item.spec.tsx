import { render } from '@testing-library/react';

import GameItem from './game-item';

describe('GameItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GameItem />);
    expect(baseElement).toBeTruthy();
  });
});
