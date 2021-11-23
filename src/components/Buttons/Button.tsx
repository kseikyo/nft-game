import { ButtonHTMLAttributes } from 'react';

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button className={`${className ?? ''}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
