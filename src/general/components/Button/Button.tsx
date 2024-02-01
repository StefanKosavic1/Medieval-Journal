import React from 'react';
import './Button.scss';
import withHelloMessage from '../../../hoc/withHelloMessage';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className = '',
  onClick,
}) => {
  let variantClassName = '';
  switch (variant) {
    case ButtonVariant.Primary:
      variantClassName = 'primary';
      break;
    default:
      variantClassName = 'secondary';
  }
  const buttonClassName = `button ${variantClassName} ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default withHelloMessage(Button);
