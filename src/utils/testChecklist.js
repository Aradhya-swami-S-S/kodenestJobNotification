// Test Checklist System

const TEST_STATUS_KEY = 'jobTrackerTestStatus'

export function getTestStatus() {
  const stored = localStorage.getItem(TEST_STATUS_KEY)
  return stored ? JSON.parse(stored) : {}
}

export function setTestStatus(status) {
  localStorage.setItem(TEST_STATUS_KEY, JSON.stringify(status))
}

export function resetTestStatus() {
  localStorage.removeItem(TEST_STATUS_KEY)
}

export function areAllTestsPassed() {
  const status = getTestStatus()
  const requiredTests = [
    'preferences-persist',
    'match-score',
    'show-matches-toggle',
    'save-job-persist',
    'apply-new-tab',
    'status-persist',
    'status-filter',
    'digest-top-10',
    'digest-persist',
    'no-console-errors'
  ]
  
  return requiredTests.every(test => status[test] === true)
}
