import React from 'react'
import Button from './Button'

function EmptyState({ title, description, actionLabel, onAction }) {
  return (
    <div className="empty-state">
      <div className="empty-state__title">{title}</div>
      <div className="empty-state__description">{description}</div>
      {actionLabel && (
        <Button variant="primary" size="small" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default EmptyState
