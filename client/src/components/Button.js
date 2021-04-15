import React from 'react';

/* const Button = ({ variant, children }) => {
  return <button type='button' className={`btn btn-${variant} m-1`}>{ children }</button>
} */

const Button = ({ variant, children }) => {
  return <button type='button' className={`btn btn-${variant} m-1`}>{children}</button>
}

export default Button;