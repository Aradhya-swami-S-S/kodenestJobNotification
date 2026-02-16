import React from 'react'
import './EmptyState.css'

function Digest() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Digest</h1>
      </div>
      <div className="page-content">
        <div className="empty-state">
          <p className="empty-state-text">
            Your daily digest will be delivered at 9AM. Check back tomorrow.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Digest
