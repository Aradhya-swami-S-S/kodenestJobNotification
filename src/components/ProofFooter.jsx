import React, { useState } from 'react'

function ProofFooter() {
  const [checklist, setChecklist] = useState({
    uiBuilt: false,
    logicWorking: false,
    testPassed: false,
    deployed: false
  })

  const toggleItem = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <footer className="proof-footer">
      <div className="proof-footer__title">Build Proof</div>
      <div className="proof-checklist">
        <ChecklistItem 
          label="UI Built" 
          checked={checklist.uiBuilt}
          onChange={() => toggleItem('uiBuilt')}
        />
        <ChecklistItem 
          label="Logic Working" 
          checked={checklist.logicWorking}
          onChange={() => toggleItem('logicWorking')}
        />
        <ChecklistItem 
          label="Test Passed" 
          checked={checklist.testPassed}
          onChange={() => toggleItem('testPassed')}
        />
        <ChecklistItem 
          label="Deployed" 
          checked={checklist.deployed}
          onChange={() => toggleItem('deployed')}
        />
      </div>
    </footer>
  )
}

function ChecklistItem({ label, checked, onChange }) {
  return (
    <label className="proof-checklist__item" style={{ cursor: 'pointer' }}>
      <div 
        className={`proof-checklist__checkbox ${checked ? 'proof-checklist__checkbox--checked' : ''}`}
        onClick={onChange}
      />
      <span>{label}</span>
    </label>
  )
}

export default ProofFooter
