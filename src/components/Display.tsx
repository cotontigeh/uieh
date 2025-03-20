import { cn } from '@/lib/utils'
import React from 'react'

export const Display = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => (
  <section
    className={cn(
      'bg-base-100 dark:bg-base-100-dark overflow-hidden',
      'flex flex-col flex-wrap gap-6 ring-1 p-4 rounded-xl ring-slate-200 dark:ring-slate-600',
      className
    )}
    {...rest}
  />
)
