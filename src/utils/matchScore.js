// Deterministic Match Score Engine
// Exact scoring rules as specified

export function calculateMatchScore(job, preferences) {
  if (!preferences) return 0

  let score = 0

  // Parse user inputs
  const roleKeywords = preferences.roleKeywords
    ? preferences.roleKeywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k)
    : []
  
  const userSkills = preferences.skills
    ? preferences.skills.split(',').map(s => s.trim().toLowerCase()).filter(s => s)
    : []

  // +25 if any roleKeyword appears in job.title (case-insensitive)
  if (roleKeywords.length > 0) {
    const titleLower = job.title.toLowerCase()
    if (roleKeywords.some(keyword => titleLower.includes(keyword))) {
      score += 25
    }
  }

  // +15 if any roleKeyword appears in job.description
  if (roleKeywords.length > 0 && job.description) {
    const descLower = job.description.toLowerCase()
    if (roleKeywords.some(keyword => descLower.includes(keyword))) {
      score += 15
    }
  }

  // +15 if job.location matches preferredLocations
  if (preferences.preferredLocations && preferences.preferredLocations.length > 0) {
    if (preferences.preferredLocations.includes(job.location)) {
      score += 15
    }
  }

  // +10 if job.mode matches preferredMode
  if (preferences.preferredMode && preferences.preferredMode.length > 0) {
    if (preferences.preferredMode.includes(job.mode)) {
      score += 10
    }
  }

  // +10 if job.experience matches experienceLevel
  if (preferences.experienceLevel && job.experience === preferences.experienceLevel) {
    score += 10
  }

  // +15 if overlap between job.skills and user.skills (any match)
  if (userSkills.length > 0 && job.skills && job.skills.length > 0) {
    const jobSkillsLower = job.skills.map(s => s.toLowerCase())
    const hasOverlap = userSkills.some(userSkill => 
      jobSkillsLower.some(jobSkill => jobSkill.includes(userSkill) || userSkill.includes(jobSkill))
    )
    if (hasOverlap) {
      score += 15
    }
  }

  // +5 if postedDaysAgo <= 2
  if (job.postedDaysAgo <= 2) {
    score += 5
  }

  // +5 if source is LinkedIn
  if (job.source === 'LinkedIn') {
    score += 5
  }

  // Cap score at 100
  return Math.min(score, 100)
}

export function getScoreBadgeClass(score) {
  if (score >= 80) return 'score-excellent'
  if (score >= 60) return 'score-good'
  if (score >= 40) return 'score-neutral'
  return 'score-low'
}

export function getScoreBadgeLabel(score) {
  if (score >= 80) return 'Excellent Match'
  if (score >= 60) return 'Good Match'
  if (score >= 40) return 'Fair Match'
  return 'Low Match'
}
