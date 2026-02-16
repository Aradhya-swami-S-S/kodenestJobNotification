import React, { useState, useEffect } from 'react'
import { jobsData } from '../data/jobsData'
import JobCard from '../components/JobCard'
import JobModal from '../components/JobModal'
import FilterBar from '../components/FilterBar'
import './Dashboard.css'

function Dashboard() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [savedJobs, setSavedJobs] = useState([])
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    mode: '',
    experience: '',
    source: '',
    sort: 'latest'
  })

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedJobs') || '[]')
    setSavedJobs(saved)
  }, [])

  const handleSaveJob = (jobId) => {
    let updated
    if (savedJobs.includes(jobId)) {
      updated = savedJobs.filter(id => id !== jobId)
    } else {
      updated = [...savedJobs, jobId]
    }
    setSavedJobs(updated)
    localStorage.setItem('savedJobs', JSON.stringify(updated))
  }

  const filterJobs = () => {
    let filtered = [...jobsData]

    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase()
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword)
      )
    }

    if (filters.location) {
      filtered = filtered.filter(job => job.location === filters.location)
    }

    if (filters.mode) {
      filtered = filtered.filter(job => job.mode === filters.mode)
    }

    if (filters.experience) {
      filtered = filtered.filter(job => job.experience === filters.experience)
    }

    if (filters.source) {
      filtered = filtered.filter(job => job.source === filters.source)
    }

    if (filters.sort === 'latest') {
      filtered.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo)
    } else {
      filtered.sort((a, b) => b.postedDaysAgo - a.postedDaysAgo)
    }

    return filtered
  }

  const filteredJobs = filterJobs()

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">{filteredJobs.length} jobs available</p>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <div className="jobs-grid">
        {filteredJobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onView={setSelectedJob}
            onSave={handleSaveJob}
            isSaved={savedJobs.includes(job.id)}
          />
        ))}
      </div>

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  )
}

export default Dashboard
