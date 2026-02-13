import React from 'react'
import './Input.css'

function Input({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  disabled = false,
  type = 'text'
}) {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default Input
