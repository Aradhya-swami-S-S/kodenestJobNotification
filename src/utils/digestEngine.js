// Daily Digest Engine
import { jobsData } from '../data/jobsData'
import { calculateMatchScore } from './matchScore'

export function generateDigest(preferences) {
  if (!preferences) return null

  // Calculate match scores for all jobs
  const jobsWithScores = jobsData.map(job => ({
    ...job,
    matchScore: calculateMatchScore(job, preferences)
  }))

  // Sort by: 1) matchScore descending, 2) postedDaysAgo ascending
  const sortedJobs = jobsWithScores.sort((a, b) => {
    if (b.matchScore !== a.matchScore) {
      return b.matchScore - a.matchScore
    }
    return a.postedDaysAgo - b.postedDaysAgo
  })

  // Select top 10
  const top10 = sortedJobs.slice(0, 10)

  return {
    date: getTodayDate(),
    jobs: top10,
    generatedAt: new Date().toISOString()
  }
}

export function getTodayDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function getFormattedDate() {
  const today = new Date()
  return today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export function saveDigest(digest) {
  const key = `jobTrackerDigest_${digest.date}`
  localStorage.setItem(key, JSON.stringify(digest))
}

export function loadTodayDigest() {
  const key = `jobTrackerDigest_${getTodayDate()}`
  const stored = localStorage.getItem(key)
  return stored ? JSON.parse(stored) : null
}

export function formatDigestAsText(digest) {
  if (!digest) return ''

  let text = `TOP 10 JOBS FOR YOU — 9AM DIGEST\n`
  text += `${getFormattedDate()}\n\n`
  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`

  digest.jobs.forEach((job, index) => {
    text += `${index + 1}. ${job.title}\n`
    text += `   Company: ${job.company}\n`
    text += `   Location: ${job.location} | ${job.mode}\n`
    text += `   Experience: ${job.experience}\n`
    text += `   Match Score: ${job.matchScore}%\n`
    text += `   Salary: ${job.salaryRange}\n`
    text += `   Apply: ${job.applyUrl}\n\n`
  })

  text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
  text += `This digest was generated based on your preferences.\n`
  text += `Job Notification Tracker - Precision-matched job discovery delivered daily at 9AM.`

  return text
}

export function createEmailDraft(digest) {
  const subject = encodeURIComponent('My 9AM Job Digest')
  const body = encodeURIComponent(formatDigestAsText(digest))
  return `mailto:?subject=${subject}&body=${body}`
}
