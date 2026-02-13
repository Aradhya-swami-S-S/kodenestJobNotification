import React from 'react'
import './Button.css'

function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  fullWidth = false,
  type = 'button'
}) {
  const className = `btn btn-${variant} ${fullWidth ? 'btn-full-width' : ''}`
  
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
