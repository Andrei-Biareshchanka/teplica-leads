import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-[#2d7a3a] text-white hover:bg-[#1f5929] active:scale-95',
    outline: 'border-2 border-[#2d7a3a] text-[#2d7a3a] hover:bg-[#2d7a3a] hover:text-white active:scale-95',
    white: 'border-2 border-white text-white hover:bg-white hover:text-[#2d7a3a] active:scale-95',
    ghost: 'text-[#2d7a3a] hover:bg-[#2d7a3a]/10 active:scale-95',
  }

  const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
