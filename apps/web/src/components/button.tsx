import { ButtonHTMLAttributes, forwardRef } from 'react';
export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', children, ...props }, ref) => (
    <button ref={ref} className={`px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-emerald-500 ${className}`} {...props}>{children}</button>
  )
);
Button.displayName = 'Button';
