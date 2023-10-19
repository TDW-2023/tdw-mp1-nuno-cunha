import { render, screen } from '@testing-library/react'
import Index from './index'

test('Element with "src/app/index.js" should exist', async () => {

    render(<Index />);
    
    const element = screen.getByText('src/app/index.js');
    expect(element).toBeDefined();

});