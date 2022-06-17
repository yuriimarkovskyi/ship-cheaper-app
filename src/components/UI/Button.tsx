import React from 'react';

interface ButtonProps {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button({
  className = '', type = 'button', onClick, children,
}: ButtonProps) {
  return (
    <button
      className={`${className} button`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
