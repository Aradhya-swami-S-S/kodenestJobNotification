import React from 'react'
import Button from './ui/Button'
import './JobCard.css'

function JobCard({ job, onView, onSave, isSaved }) {
  const handleApply = () => {
    window.open(job.applyUrl, '_blank')
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
        <span className={`source-badge source-${job.source.toLowerCase()}`}>
          {job.source}
        </span>
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
