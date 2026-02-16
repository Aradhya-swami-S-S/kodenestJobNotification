import React, { useState, useEffect } from 'react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { getProofData, setProofData, isValidUrl, areAllLinksProvided, getProjectStatus, formatFinalSubmission, STEPS } from '../utils/proofSystem'
import { areAllTestsPassed } from '../utils/testChecklist'
import './Proof.css'

function Proof() {
  const [proofData, setProofDataState] = useState({
    lovableLink: '',
    githubLink: '',
    deployedUrl: ''
  })
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)
  const [allTestsPassed, setAllTestsPassed] = useState(false)
  const [projectStatus, setProjectStatus] = useState('Not Started')

  useEffect(() => {
    const data = getProofData()
    setProofDataState(data)
    
    const testsPassed = areAllTestsPassed()
    setAllTestsPassed(testsPassed)
    
    const linksProvided = areAllLinksProvided()
    const status = getProjectStatus(testsPassed, linksProvided)
    setProjectStatus(status)
  }, [])

  const handleInputChange = (field, value) => {
    const newData = { ...proofData, [field]: value }
    setProofDataState(newData)
    setProofData(newData)
    
    // Clear error when user types
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' })
    }
    
    // Update status
    const linksProvided = isValidUrl(newData.lovableLink) && 
                          isValidUrl(newData.githubLink) && 
                          isValidUrl(newData.deployedUrl)
    const status = getProjectStatus(allTestsPassed, linksProvided)
    setProjectStatus(status)
  }

  const validateField = (field) => {
    if (!proofData[field]) {
      setErrors({ ...errors, [field]: 'This field is required' })
      return false
    }
    if (!isValidUrl(proofData[field])) {
      setErrors({ ...errors, [field]: 'Please enter a valid URL' })
      return false
    }
    setErrors({ ...errors, [field]: '' })
    return true
  }

  const handleCopySubmission = () => {
    const text = formatFinalSubmission(proofData)
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const allLinksProvided = areAllLinksProvided()
  const isShipped = projectStatus === 'Shipped'

  return (
    <div className="proof-page">
      <div className="proof-header">
        <div className="proof-header-content">
          <h1 className="proof-title">Project 1 — Job Notification Tracker</h1>
          <span className={`status-badge-large status-${projectStatus.toLowerCase().replace(' ', '-')}`}>
            {projectStatus}
          </span>
        </div>
      </div>

      {isShipped && (
        <div className="shipped-message">
          <p>Project 1 Shipped Successfully.</p>
        </div>
      )}

      <div className="proof-section">
        <h2 className="section-title">Step Completion Summary</h2>
        <div className="steps-list">
          {STEPS.map(step => (
            <div key={step.id} className="step-item">
              <span className="step-number">{step.id}</span>
              <span className="step-name">{step.name}</span>
              <span className="step-status completed">Completed</span>
            </div>
          ))}
        </div>
      </div>

      <div className="proof-section">
        <h2 className="section-title">Artifact Collection</h2>
        <div className="artifacts-form">
          <div className="artifact-input">
            <Input
              label="Lovable Project Link"
              placeholder="https://lovable.dev/projects/..."
              value={proofData.lovableLink}
              onChange={(e) => handleInputChange('lovableLink', e.target.value)}
              onBlur={() => validateField('lovableLink')}
            />
            {errors.lovableLink && (
              <span className="error-message">{errors.lovableLink}</span>
            )}
          </div>

          <div className="artifact-input">
            <Input
              label="GitHub Repository Link"
              placeholder="https://github.com/username/repo"
              value={proofData.githubLink}
              onChange={(e) => handleInputChange('githubLink', e.target.value)}
              onBlur={() => validateField('githubLink')}
            />
            {errors.githubLink && (
              <span className="error-message">{errors.githubLink}</span>
            )}
          </div>

          <div className="artifact-input">
            <Input
              label="Deployed URL (Vercel or equivalent)"
              placeholder="https://your-project.vercel.app"
              value={proofData.deployedUrl}
              onChange={(e) => handleInputChange('deployedUrl', e.target.value)}
              onBlur={() => validateField('deployedUrl')}
            />
            {errors.deployedUrl && (
              <span className="error-message">{errors.deployedUrl}</span>
            )}
          </div>
        </div>
      </div>

      <div className="proof-section">
        <h2 className="section-title">Submission Requirements</h2>
        <div className="requirements-checklist">
          <div className={`requirement-item ${allLinksProvided ? 'completed' : ''}`}>
            <span className="requirement-icon">{allLinksProvided ? '✓' : '○'}</span>
            <span className="requirement-text">All 3 links provided</span>
          </div>
          <div className={`requirement-item ${allTestsPassed ? 'completed' : ''}`}>
            <span className="requirement-icon">{allTestsPassed ? '✓' : '○'}</span>
            <span className="requirement-text">All 10 test checklist items passed</span>
          </div>
        </div>
      </div>

      <div className="proof-actions">
        <Button 
          variant="primary" 
          onClick={handleCopySubmission}
          disabled={!allLinksProvided}
        >
          {copied ? 'Copied!' : 'Copy Final Submission'}
        </Button>
      </div>

      {!allLinksProvided && (
        <p className="proof-note">
          Complete all artifact links to enable submission export.
        </p>
      )}
    </div>
  )
}

export default Proof
