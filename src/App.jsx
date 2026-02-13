import React from 'react'
import TopBar from './components/TopBar'
import ContextHeader from './components/ContextHeader'
import Workspace from './components/Workspace'
import ProofFooter from './components/ProofFooter'

function App() {
  return (
    <div className="app-container">
      <TopBar 
        projectName="KodNest Premium"
        currentStep={1}
        totalSteps={5}
        status="in-progress"
      />
      
      <ContextHeader 
        title="Design System Foundation"
        subtitle="A calm, intentional design system built for serious product companies."
      />
      
      <Workspace />
      
      <ProofFooter />
    </div>
  )
}

export default App
