import React, { useState } from 'react'
import Button from './ui/Button'
import { getScoreBadgeClass } from '../utils/matchScore'
import { JOB_STATUSES, getJobStatus, setJobStatus, getStatusBadgeClass } from '../utils/statusTracking'
import './JobCard.css'

function JobCard({ job, onView, onSave, isSaved, matchScore, onStatusChange }) {
  const [status, setStatus] = useState(getJobStatus(job.id))

  const handleApply = () => {
    window.open(job.applyUrl, '_blank')
  }

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus)
    setJobStatus(job.id, newStatus)
    if (onStatusChange) {
      onStatusChange(newStatus)
    }
  }

  const formatPostedDate = (days) => {
    if (days === 0) return 'Today'
    if (days === 1) return '1 day ago'
    return `${days} days ago`
  }

  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>
        <div className="job-badges">
          {matchScore !== undefined && (
            <span className={`match-score-badge ${getScoreBadgeClass(matchScore)}`}>
              {matchScore}%
            </span>
          )}
          <span className={`source-badge source-${job.source.toLowerCase()}`}>
            {job.source}
          </span>
        </div>
      </div>

      <div className="job-details">
        <span className="job-detail-item">{job.location}</span>
        <span className="job-detail-separator">•</span>
        <span className="job-detail-item">{job.mode}</span>
        <span className="job-detail-separator">•</span>
        <span className="job-detail-item">{job.experience}</span>
      </div>

      <div className="job-salary">{job.salaryRange}</div>

      <div className="job-meta">
        <span className="job-posted">{formatPostedDate(job.postedDaysAgo)}</span>
      </div>

      <div className="job-status-group">
        <label className="status-label">Status:</label>
        <div className="status-buttons">
          {Object.values(JOB_STATUSES).map(statusOption => (
            <button
              key={statusOption}
              className={`status-btn ${status === statusOption ? 'status-btn-active' : ''} ${getStatusBadgeClass(statusOption)}`}
              onClick={() => handleStatusChange(statusOption)}
            >
              {statusOption}
            </button>
          ))}
        </div>
      </div>

      <div className="job-actions">
        <Button variant="secondary" onClick={() => onView(job)}>View</Button>
        <Button variant="secondary" onClick={() => onSave(job.id)}>
          {isSaved ? 'Saved' : 'Save'}
        </Button>
        <Button variant="primary" onClick={handleApply}>Apply</Button>
      </div>
    </div>
  )
}

export default JobCard
