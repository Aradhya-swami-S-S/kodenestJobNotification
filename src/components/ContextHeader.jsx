import React from 'react'
import './ContextHeader.css'

function ContextHeader({ title, subtitle }) {
  return (
    <div className="context-header">
      <h1 className="context-title">{title}</h1>
      <p className="context-subtitle">{subtitle}</p>
    </div>
  )
}

export default ContextHeader
