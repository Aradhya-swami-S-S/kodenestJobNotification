import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { jobsData } from '../data/jobsData'
import { calculateMatchScore } from '../utils/matchScore'
import JobCard from '../components/JobCard'
import JobModal from '../components/JobModal'
import FilterBar from '../components/FilterBar'
import './Dashboard.css'

function Dashboard() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [savedJobs, setSavedJobs] = useState([])
  const [preferences, setPreferences] = useState(null)
  const [showOnlyMatches, setShowOnlyMatches] = useState(false)
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
    
    const prefs = localStorage.getItem('jobTrackerPreferences')
    if (prefs) {
      setPreferences(JSON.parse(prefs))
    }
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

  const extractSalaryNumber = (salaryRange) => {
    const match = salaryRange.match(/(\d+)/)
    return match ? parseInt(match[1]) : 0
  }

  const filteredJobs = useMemo(() => {
    let filtered = jobsData.map(job => ({
      ...job,
      matchScore: preferences ? calculateMatchScore(job, preferences) : 0
    }))

    // Apply keyword filter
    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase()
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword)
      )
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(job => job.location === filters.location)
    }

    // Apply mode filter
    if (filters.mode) {
      filtered = filtered.filter(job => job.mode === filters.mode)
    }

    // Apply experience filter
    if (filters.experience) {
      filtered = filtered.filter(job => job.experience === filters.experience)
    }

    // Apply source filter
    if (filters.source) {
      filtered = filtered.filter(job => job.source === filters.source)
    }

    // Apply match threshold filter
    if (showOnlyMatches && preferences) {
      filtered = filtered.filter(job => job.matchScore >= preferences.minMatchScore)
    }

    // Apply sorting
    if (filters.sort === 'latest') {
      filtered.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo)
    } else if (filters.sort === 'oldest') {
      filtered.sort((a, b) => b.postedDaysAgo - a.postedDaysAgo)
    } else if (filters.sort === 'match') {
      filtered.sort((a, b) => b.matchScore - a.matchScore)
    } else if (filters.sort === 'salary') {
      filtered.sort((a, b) => extractSalaryNumber(b.salaryRange) - extractSalaryNumber(a.salaryRange))
    }

    return filtered
  }, [jobsData, filters, preferences, showOnlyMatches])

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">{filteredJobs.length} jobs available</p>
      </div>

      {!preferences && (
        <div className="preferences-banner">
          <p>Set your preferences to activate intelligent matching.</p>
          <Link to="/settings" className="banner-link">Go to Settings →</Link>
        </div>
      )}

      {preferences && (
        <div className="match-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={showOnlyMatches}
              onChange={(e) => setShowOnlyMatches(e.target.checked)}
            />
            <span>Show only jobs above my threshold ({preferences.minMatchScore}%)</span>
          </label>
        </div>
      )}

      <FilterBar filters={filters} onFilterChange={setFilters} />

      {filteredJobs.length === 0 ? (
        <div className="empty-state-container">
          <div className="empty-state">
            <p className="empty-state-text">
              No roles match your criteria. Adjust filters or lower threshold.
            </p>
          </div>
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onView={setSelectedJob}
              onSave={handleSaveJob}
              isSaved={savedJobs.includes(job.id)}
              matchScore={preferences ? job.matchScore : undefined}
            />
          ))}
        </div>
      )}

      {selectedJob && (
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  )
}

export default Dashboard
