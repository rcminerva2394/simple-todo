import React from 'react';

import buttonStyles from './Button.module.css';

const Button = ({ type, className, children, ...rest }) => {
  return (
    <button
      className={`${buttonStyles.button} ${className}`}
      type={type || 'button'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
