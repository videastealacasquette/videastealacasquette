import * as React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: 'default'|'secondary'; size?: 'sm'|'md'|'lg' };

export function Button({ className, variant='default', size='md', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl transition border border-transparent';
  const variants = {
    default: 'bg-white/90 text-black hover:bg-white',
    secondary: 'bg-neutral-900 text-neutral-100 hover:bg-neutral-800 border-neutral-700 border',
  } as const;
  const sizes = { sm: 'px-3 py-2 text-sm', md: 'px-4 py-3', lg: 'px-5 py-4 text-base' } as const;
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
