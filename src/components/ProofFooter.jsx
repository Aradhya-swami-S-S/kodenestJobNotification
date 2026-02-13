import React from 'react'
import './ProofFooter.css'

function ProofFooter({ proofState, onProofChange }) {
  const handleCheckboxChange = (key) => {
    onProofChange({
      ...proofState,
      [key]: !proofState[key]
    })
  }

  const proofItems = [
    { key: 'uiBuilt', label: 'UI Built' },
    { key: 'logicWorking', label: 'Logic Working' },
    { key: 'testPassed', label: 'Test Passed' },
    { key: 'deployed', label: 'Deployed' }
  ]

  return (
    <div className="proof-footer">
      <div className="proof-content">
        {proofItems.map(item => (
          <label key={item.key} className="proof-item">
            <input
              type="checkbox"
              checked={proofState[item.key]}
              onChange={() => handleCheckboxChange(item.key)}
              className="proof-checkbox"
            />
            <span className="proof-label">{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default ProofFooter
