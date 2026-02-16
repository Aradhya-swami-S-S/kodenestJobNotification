import React from 'react'
import './EmptyState.css'

function Saved() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Saved</h1>
      </div>
      <div className="page-content">
        <div className="empty-state">
          <p className="empty-state-text">
            No saved jobs yet. Jobs you save will appear here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Saved
