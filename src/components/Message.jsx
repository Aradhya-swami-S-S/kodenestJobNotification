import React from 'react'

function Message({ type = 'success', title, description, action }) {
  const className = `${type}-message`
  const titleClassName = `${type}-message__title`

  return (
    <div className={className}>
      <div className={titleClassName}>{title}</div>
      {description && (
        <p style={{ margin: 0, fontSize: '14px' }}>{description}</p>
      )}
      {action && type === 'error' && (
        <div className="error-message__action">{action}</div>
      )}
    </div>
  )
}

export default Message
