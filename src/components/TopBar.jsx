import React from 'react'
import './TopBar.css'

function TopBar({ projectName, currentStep, totalSteps, status }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Not Started': return 'status-not-started'
      case 'In Progress': return 'status-in-progress'
      case 'Shipped': return 'status-shipped'
      default: return 'status-not-started'
    }
  }

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <span className="project-name">{projectName}</span>
      </div>
      
      <div className="top-bar-center">
        <span className="progress-indicator">Step {currentStep} / {totalSteps}</span>
      </div>
      
      <div className="top-bar-right">
        <span className={`status-badge ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
    </div>
  )
}

export default TopBar
