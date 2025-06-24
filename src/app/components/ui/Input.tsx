import React, { forwardRef } from 'react';
import './input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  isOfficial?: boolean; // Para campos con apariencia oficial/institucional
  leftIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className = '',
      inputSize = 'md',
      isOfficial = false,
      leftIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Construir clases CSS
    const inputContainerClasses = ['input-container', className].filter(Boolean).join(' ');

    const inputWrapperClasses = [leftIcon ? 'input-icon' : ''].filter(Boolean).join(' ');

    const inputClasses = [
      'input',
      `input-${inputSize}`,
      error ? 'input-error' : '',
      isOfficial ? 'input-official' : '',
      disabled ? 'input-disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={inputContainerClasses}>
        {label && <label className="input-label">{label}</label>}
        <div className={inputWrapperClasses}>
          {leftIcon && <span className="input-icon-left">{leftIcon}</span>}
          <input ref={ref} className={inputClasses} disabled={disabled} {...props} />
        </div>
        {error && <div className="error-message">{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
