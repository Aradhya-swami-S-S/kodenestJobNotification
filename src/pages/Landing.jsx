import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-headline">Stop Missing The Right Jobs.</h1>
        <p className="landing-subtext">
          Precision-matched job discovery delivered daily at 9AM.
        </p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/settings')}
        >
          Start Tracking
        </Button>
      </div>
    </div>
  )
}

export default Landing
