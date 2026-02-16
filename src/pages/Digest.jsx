import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { generateDigest, loadTodayDigest, saveDigest, getFormattedDate, formatDigestAsText, createEmailDraft } from '../utils/digestEngine'
import './Digest.css'

function Digest() {
  const [preferences, setPreferences] = useState(null)
  const [digest, setDigest] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const prefs = localStorage.getItem('jobTrackerPreferences')
    if (prefs) {
      setPreferences(JSON.parse(prefs))
    }

    // Load existing digest for today
    const existingDigest = loadTodayDigest()
    if (existingDigest) {
      setDigest(existingDigest)
    }
  }, [])

  const handleGenerateDigest = () => {
    if (!preferences) return

    // Check if digest already exists for today
    const existing = loadTodayDigest()
    if (existing) {
      setDigest(existing)
      return
    }

    // Generate new digest
    const newDigest = generateDigest(preferences)
    if (newDigest) {
      saveDigest(newDigest)
      setDigest(newDigest)
    }
  }

  const handleCopyToClipboard = () => {
    const text = formatDigestAsText(digest)
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCreateEmailDraft = () => {
    const mailtoLink = createEmailDraft(digest)
    window.location.href = mailtoLink
  }

  if (!preferences) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Digest</h1>
        </div>
        <div className="page-content">
          <div className="blocking-message">
            <p className="blocking-text">
              Set preferences to generate a personalized digest.
            </p>
            <Link to="/settings">
              <Button variant="primary">Go to Settings</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (!digest) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Digest</h1>
          <p className="page-subtitle">Your personalized daily job digest</p>
        </div>
        <div className="page-content">
          <div className="digest-generate">
            <Button variant="primary" onClick={handleGenerateDigest}>
              Generate Today's 9AM Digest (Simulated)
            </Button>
            <p className="demo-note">
              Demo Mode: Daily 9AM trigger simulated manually.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (digest.jobs.length === 0) {
    return (
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Digest</h1>
        </div>
        <div className="page-content">
          <div className="empty-state">
            <p className="empty-state-text">
              No matching roles today. Check again tomorrow.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="digest-page">
      <div className="digest-container">
        <div className="digest-card">
          <div className="digest-header">
            <h1 className="digest-title">Top 10 Jobs For You — 9AM Digest</h1>
            <p className="digest-date">{getFormattedDate()}</p>
          </div>

          <div className="digest-jobs">
            {digest.jobs.map((job, index) => (
              <div key={job.id} className="digest-job-item">
                <div className="digest-job-number">{index + 1}</div>
                <div className="digest-job-content">
                  <h3 className="digest-job-title">{job.title}</h3>
                  <p className="digest-job-company">{job.company}</p>
                  <div className="digest-job-details">
                    <span>{job.location}</span>
                    <span className="detail-separator">•</span>
                    <span>{job.mode}</span>
                    <span className="detail-separator">•</span>
                    <span>{job.experience}</span>
                  </div>
                  <div className="digest-job-meta">
                    <span className="digest-match-score">
                      Match: {job.matchScore}%
                    </span>
                    <span className="digest-salary">{job.salaryRange}</span>
                  </div>
                  <Button 
                    variant="primary" 
                    onClick={() => window.open(job.applyUrl, '_blank')}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="digest-footer">
            <p className="digest-footer-text">
              This digest was generated based on your preferences.
            </p>
          </div>
        </div>

        <div className="digest-actions">
          <Button variant="secondary" onClick={handleCopyToClipboard}>
            {copied ? 'Copied!' : 'Copy Digest to Clipboard'}
          </Button>
          <Button variant="secondary" onClick={handleCreateEmailDraft}>
            Create Email Draft
          </Button>
          <Button variant="primary" onClick={handleGenerateDigest}>
            Regenerate Digest
          </Button>
        </div>

        <p className="demo-note">
          Demo Mode: Daily 9AM trigger simulated manually.
        </p>
      </div>
    </div>
  )
}

export default Digest
