import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders correctly', () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass('loader');
  });

  it('applies given className', () => {
    const testClassName = 'test-class';
    render(<Loader className={testClassName} />);
    const loaderElement = screen.getByTestId('loader');
    expect(loaderElement).toHaveClass('loader');
    expect(loaderElement).toHaveClass(testClassName);
  });
});
