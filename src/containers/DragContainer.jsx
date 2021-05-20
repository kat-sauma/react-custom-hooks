import React from 'react';
import { render, screen } from '@testing-library/react';
import Queen from '../components/app/drag/Queen';


describe('DragContainer', () => {
  it('renders a list of Drag Queens from Ru Paul to the page', async () => {
    render(<Queen/>);


    const li = await screen.findByRole('listitem', { name: 'queen' });
    expect(li).toBeEmptyDOMElement();
  });
});
