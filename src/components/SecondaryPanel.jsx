import React, { useState } from 'react'
import Button from './ui/Button'
import './SecondaryPanel.css'

function SecondaryPanel() {
  const [copied, setCopied] = useState(false)
  
  const promptText = `Create a premium SaaS design system with calm, intentional design. Use #F7F6F3 background, #111111 text, #8B0000 accent. Spacing: 8, 16, 24, 40, 64px. Serif headings, sans-serif body.`

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="secondary-panel">
      <div className="panel-section">
        <h3 className="panel-heading">Step Explanation</h3>
        <p className="panel-text">
          This design system establishes the foundation for KodNest Premium Build System. 
          Every component follows consistent spacing, typography, and color rules.
        </p>
      </div>

      <div className="panel-section">
        <h3 className="panel-heading">Copyable Prompt</h3>
        <div className="prompt-box">
          <p className="prompt-text">{promptText}</p>
        </div>
        <Button variant="secondary" onClick={handleCopy} fullWidth>
          {copied ? 'Copied' : 'Copy Prompt'}
        </Button>
      </div>

      <div className="panel-section">
        <h3 className="panel-heading">Actions</h3>
        <div className="action-buttons">
          <Button variant="primary" fullWidth>Build in Lovable</Button>
          <Button variant="secondary" fullWidth>It Worked</Button>
          <Button variant="secondary" fullWidth>Report Error</Button>
          <Button variant="secondary" fullWidth>Add Screenshot</Button>
        </div>
      </div>
    </div>
  )
}

export default SecondaryPanel
