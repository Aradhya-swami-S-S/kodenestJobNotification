import React from 'react'
import Button from './ui/Button'
import './JobModal.css'

function JobModal({ job, onClose }) {
  if (!job) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{job.title}</h2>
            <p className="modal-company">{job.company}</p>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="modal-section-title">Details</h3>
            <div className="modal-details">
              <div className="modal-detail-row">
                <span className="modal-detail-label">Location:</span>
                <span>{job.location}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Mode:</span>
                <span>{job.mode}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Experience:</span>
                <span>{job.experience}</span>
              </div>
              <div className="modal-detail-row">
                <span className="modal-detail-label">Salary:</span>
                <span>{job.salaryRange}</span>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Description</h3>
            <p className="modal-description">{job.description}</p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Required Skills</h3>
            <div className="modal-skills">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="primary" onClick={() => window.open(job.applyUrl, '_blank')}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JobModal
