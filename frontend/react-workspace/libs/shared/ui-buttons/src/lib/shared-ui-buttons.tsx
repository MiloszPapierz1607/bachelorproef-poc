import React, { forwardRef } from 'react';

interface Props extends React.ComponentPropsWithRef<'button'> {
  variant?: 'red' | 'blue';
  children?: React.ReactNode;
}

interface Test {
  test: string;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'blue', children, ...htmlButtonProps }, ref) => (
    <button
      data-transaction-name="my custom button name"
      {...htmlButtonProps}
      className={`btn-primary p-2 focus:ring-2 jutify-center ${
        variant === 'blue' ? 'bg-blue-500' : 'bg-red-500'
      }`}
      ref={ref}
    >
      {children}
    </button>
  )
);
