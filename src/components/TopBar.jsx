import React from 'react'

function TopBar({ projectName, currentStep, totalSteps, status }) {
  const statusClass = `top-bar__status top-bar__status--${status}`
  
  const statusText = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'shipped': 'Shipped'
  }

  return (
    <header className="top-bar">
      <div className="top-bar__project">{projectName}</div>
      <div className="top-bar__progress">Step {currentStep} / {totalSteps}</div>
      <div className={statusClass}>{statusText[status]}</div>
    </header>
  )
}

export default TopBar
