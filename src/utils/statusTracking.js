// Job Status Tracking System

export const JOB_STATUSES = {
  NOT_APPLIED: 'Not Applied',
  APPLIED: 'Applied',
  REJECTED: 'Rejected',
  SELECTED: 'Selected'
}

export function getJobStatus(jobId) {
  const statuses = JSON.parse(localStorage.getItem('jobTrackerStatus') || '{}')
  return statuses[jobId] || JOB_STATUSES.NOT_APPLIED
}

export function setJobStatus(jobId, status) {
  const statuses = JSON.parse(localStorage.getItem('jobTrackerStatus') || '{}')
  statuses[jobId] = status
  localStorage.setItem('jobTrackerStatus', JSON.stringify(statuses))
  
  // Track status change history
  addStatusUpdate(jobId, status)
}

export function getAllStatuses() {
  return JSON.parse(localStorage.getItem('jobTrackerStatus') || '{}')
}

export function getStatusBadgeClass(status) {
  switch (status) {
    case JOB_STATUSES.NOT_APPLIED:
      return 'status-not-applied'
    case JOB_STATUSES.APPLIED:
      return 'status-applied'
    case JOB_STATUSES.REJECTED:
      return 'status-rejected'
    case JOB_STATUSES.SELECTED:
      return 'status-selected'
    default:
      return 'status-not-applied'
  }
}

// Status Update History
function addStatusUpdate(jobId, status) {
  const updates = JSON.parse(localStorage.getItem('jobTrackerStatusUpdates') || '[]')
  
  updates.unshift({
    jobId,
    status,
    timestamp: new Date().toISOString()
  })
  
  // Keep only last 50 updates
  const trimmed = updates.slice(0, 50)
  localStorage.setItem('jobTrackerStatusUpdates', JSON.stringify(trimmed))
}

export function getRecentStatusUpdates(limit = 10) {
  const updates = JSON.parse(localStorage.getItem('jobTrackerStatusUpdates') || '[]')
  return updates.slice(0, limit)
}

export function getFormattedDate(isoString) {
  const date = new Date(isoString)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)
  
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
