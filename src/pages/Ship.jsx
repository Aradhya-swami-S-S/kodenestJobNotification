import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { areAllTestsPassed } from '../utils/testChecklist'
import './Ship.css'

function Ship() {
  const [allTestsPassed, setAllTestsPassed] = useState(false)

  useEffect(() => {
    setAllTestsPassed(areAllTestsPassed())
  }, [])

  if (!allTestsPassed) {
    return (
      <div className="ship-page">
        <div className="ship-locked">
          <div className="lock-icon">🔒</div>
          <h1 className="ship-title">Ship Page Locked</h1>
          <p className="ship-message">
            Complete all test checklist items to unlock this page.
          </p>
          <Link to="/test">
            <Button variant="primary">Go to Test Checklist</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="ship-page">
      <div className="ship-unlocked">
        <div className="success-icon">🚀</div>
        <h1 className="ship-title">Ready to Ship!</h1>
        <p className="ship-message">
          All tests have passed. Your Job Notification Tracker is ready for deployment.
        </p>
        <div className="ship-actions">
          <Button variant="primary">Deploy to Production</Button>
          <Link to="/test">
            <Button variant="secondary">Review Tests</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Ship
