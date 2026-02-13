import React from 'react'

function Input({ type = 'text', placeholder, value, onChange, ...props }) {
  if (type === 'textarea') {
    return (
      <textarea 
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    )
  }

  return (
    <input 
      type={type}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}

export default Input
