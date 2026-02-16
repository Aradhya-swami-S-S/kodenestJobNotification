// Proof & Submission System

const PROOF_DATA_KEY = 'jobTrackerProofData'

export function getProofData() {
  const stored = localStorage.getItem(PROOF_DATA_KEY)
  return stored ? JSON.parse(stored) : {
    lovableLink: '',
    githubLink: '',
    deployedUrl: ''
  }
}

export function setProofData(data) {
  localStorage.setItem(PROOF_DATA_KEY, JSON.stringify(data))
}

export function isValidUrl(url) {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function areAllLinksProvided() {
  const data = getProofData()
  return isValidUrl(data.lovableLink) && 
         isValidUrl(data.githubLink) && 
         isValidUrl(data.deployedUrl)
}

export function getProjectStatus(allTestsPassed, allLinksProvided) {
  if (allTestsPassed && allLinksProvided) {
    return 'Shipped'
  }
  if (allTestsPassed || allLinksProvided) {
    return 'In Progress'
  }
  return 'Not Started'
}

export function formatFinalSubmission(data) {
  return `Job Notification Tracker — Final Submission

Lovable Project:
${data.lovableLink || '[Not provided]'}

GitHub Repository:
${data.githubLink || '[Not provided]'}

Live Deployment:
${data.deployedUrl || '[Not provided]'}

Core Features:
- Intelligent match scoring
- Daily digest simulation
- Status tracking
- Test checklist enforced

────────────────────────────────────────────────────────`
}

export const STEPS = [
  { id: 1, name: 'Design System Foundation', route: '/' },
  { id: 2, name: 'Route Skeleton', route: '/dashboard' },
  { id: 3, name: 'Job Data & Rendering', route: '/dashboard' },
  { id: 4, name: 'Match Scoring Engine', route: '/settings' },
  { id: 5, name: 'Daily Digest', route: '/digest' },
  { id: 6, name: 'Status Tracking', route: '/dashboard' },
  { id: 7, name: 'Test Checklist', route: '/test' },
  { id: 8, name: 'Proof & Submission', route: '/proof' }
]
