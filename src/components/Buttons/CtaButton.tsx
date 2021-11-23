import { ButtonHTMLAttributes } from 'react';

import { Button } from './Button';

export const CtaButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      className={`h-11 border-0 w-auto px-10 rounded cursor-pointer text-base font-bold text-white ${
        className ?? ''
      }`}
      {...props}
    >
      {children}
    </Button>
  );
};
