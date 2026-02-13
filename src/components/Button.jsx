import React from 'react'

function Button({ children, variant = 'primary', size = 'default', onClick, ...props }) {
  const className = `btn btn--${variant} ${size === 'small' ? 'btn--small' : ''}`
  
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
