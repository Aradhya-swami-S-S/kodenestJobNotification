import React from 'react'
import './EmptyState.css'

function Proof() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Proof</h1>
      </div>
      <div className="page-content">
        <div className="empty-state">
          <p className="empty-state-text">
            Artifact collection placeholder. Evidence and proof will be stored here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Proof
