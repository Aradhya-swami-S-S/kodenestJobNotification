import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="empty-state">
          <p className="empty-state-text">
            No jobs yet. In the next step, you will load a realistic dataset.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
