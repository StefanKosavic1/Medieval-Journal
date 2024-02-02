import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonVariant } from './Button';

describe('Button', () => {
  test('respons on clicked even', () => {
    const buttonText = 'Click Me';
    const handleClick = jest.fn();

    render(
      <Button variant={ButtonVariant.Primary} onClick={handleClick}>
        {buttonText}
      </Button>
    );

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('primary');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('add class', () => {
    const customClass = 'Add background color ';
    render(
      <Button variant={ButtonVariant.Secondary} className={customClass}>
        Test
      </Button>
    );

    const button = screen.getByRole('button', { name: 'Test' });
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('secondary');
    expect(button).toHaveClass(customClass);
  });
});
