import React, { useState } from 'react'
import TopBar from './TopBar'
import ContextHeader from './ContextHeader'
import PrimaryWorkspace from './PrimaryWorkspace'
import SecondaryPanel from './SecondaryPanel'
import ProofFooter from './ProofFooter'
import './DesignSystemShowcase.css'

function DesignSystemShowcase() {
  const [proofState, setProofState] = useState({
    uiBuilt: false,
    logicWorking: false,
    testPassed: false,
    deployed: false
  })

  return (
    <div className="app-container">
      <TopBar 
        projectName="KodNest Premium Build System"
        currentStep={1}
        totalSteps={4}
        status="In Progress"
      />
      
      <ContextHeader 
        title="Design System Foundation"
        subtitle="A calm, intentional component library for serious B2C products"
      />
      
      <div className="main-layout">
        <PrimaryWorkspace />
        <SecondaryPanel />
      </div>
      
      <ProofFooter 
        proofState={proofState}
        onProofChange={setProofState}
      />
    </div>
  )
}

export default DesignSystemShowcase
