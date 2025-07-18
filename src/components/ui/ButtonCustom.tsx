import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ButtonCustomProps = {
  label: string;
  variant?: 'primary' | 'outline';
  icon?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void
};

export default function ButtonCustom({
  label,
  variant = 'primary',
  icon,
  className = '',
  href,
  onClick
}: ButtonCustomProps) {
  const baseClass =
    'flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium transition-all';
  const variants = {
    primary: 'bg-[#1464f4] text-white hover:bg-[#1436f4]',
    outline: 'border border-[#1464f4] text-[#1464f4] hover:bg-[#1464f4] hover:text-white',
  };

  const classes = cn(baseClass, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {label}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
}
