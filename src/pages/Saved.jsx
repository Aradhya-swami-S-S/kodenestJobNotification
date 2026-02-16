import React, { useState, useEffect } from 'react'
import { jobsData } from '../data/jobsData'
import JobCard from '../components/JobCard'
import JobModal from '../components/JobModal'
import './EmptyState.css'

function Saved() {
  const [savedJobs, setSavedJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedJobs') || '[]')
    setSavedJobs(saved)
  }, [])

  const handleSaveJob = (jobId) => {
    const updated = savedJobs.filter(id => id !== jobId)
    setSavedJobs(updated)
    localStorage.setItem('savedJobs', JSON.stringify(updated))
  }

  const savedJobsData = jobsData.filter(job => savedJobs.includes(job.id))

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Saved</h1>
        <p className="dashboard-subtitle">{savedJobsData.length} saved jobs</p>
      </div>
      <div className="page-content">
        {savedJobsData.length === 0 ? (
          <div className="empty-state">
            <p className="empty-state-text">
              No saved jobs yet. Jobs you save will appear here.
            </p>
          </div>
        ) : (
          <div className="jobs-grid">
            {savedJobsData.map(job => (
              <JobCard
                key={job.id}
                job={job}
                onView={setSelectedJob}
                onSave={handleSaveJob}
                isSaved={true}
              />
            ))}
          </div>
        )}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  )
}

export default Saved
