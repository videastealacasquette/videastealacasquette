import * as React from 'react';
export function Card({ className='', children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={"rounded-2xl border border-neutral-800 bg-neutral-900/40 " + className}>{children}</div>;
}
export function CardContent({ className='', children }: React.PropsWithChildren<{className?: string}>) {
  return <div className={"p-6 " + className}>{children}</div>;
}
