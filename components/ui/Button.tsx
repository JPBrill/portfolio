import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-base transition-all duration-180 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-base";
  
  const variants = {
    primary: "bg-accent-primary text-bg-base hover:bg-accent-primary/90 hover:-translate-y-[2px] shadow-sm hover:shadow-accent-primary/20",
    secondary: "bg-bg-elevated text-text-primary border border-white/10 hover:border-white/20 hover:-translate-y-[2px] shadow-sm",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-white/5",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
