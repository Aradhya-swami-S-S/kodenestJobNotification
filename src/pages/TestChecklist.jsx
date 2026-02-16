import React, { useState, useEffect } from 'react'
import Button from '../components/ui/Button'
import { getTestStatus, setTestStatus, resetTestStatus, areAllTestsPassed } from '../utils/testChecklist'
import './TestChecklist.css'

function TestChecklist() {
  const [testItems, setTestItems] = useState([
    {
      id: 'preferences-persist',
      label: 'Preferences persist after refresh',
      tooltip: 'Set preferences in /settings, refresh page, verify they are still there'
    },
    {
      id: 'match-score',
      label: 'Match score calculates correctly',
      tooltip: 'Set preferences, check job cards show match scores with correct percentages'
    },
    {
      id: 'show-matches-toggle',
      label: '"Show only matches" toggle works',
      tooltip: 'Enable toggle on /dashboard, verify only jobs above threshold display'
    },
    {
      id: 'save-job-persist',
      label: 'Save job persists after refresh',
      tooltip: 'Save a job, refresh page, verify it still shows as saved'
    },
    {
      id: 'apply-new-tab',
      label: 'Apply opens in new tab',
      tooltip: 'Click Apply button on any job, verify it opens in new browser tab'
    },
    {
      id: 'status-persist',
      label: 'Status update persists after refresh',
      tooltip: 'Change job status to "Applied", refresh page, verify status is maintained'
    },
    {
      id: 'status-filter',
      label: 'Status filter works correctly',
      tooltip: 'Select "Applied" in status filter, verify only Applied jobs show'
    },
    {
      id: 'digest-top-10',
      label: 'Digest generates top 10 by score',
      tooltip: 'Generate digest on /digest, verify top 10 jobs sorted by match score'
    },
    {
      id: 'digest-persist',
      label: 'Digest persists for the day',
      tooltip: 'Generate digest, refresh page, verify same digest loads without regenerating'
    },
    {
      id: 'no-console-errors',
      label: 'No console errors on main pages',
      tooltip: 'Open DevTools Console, navigate all pages, verify no errors appear'
    }
  ])

  const [checkedItems, setCheckedItems] = useState({})

  useEffect(() => {
    const status = getTestStatus()
    setCheckedItems(status)
  }, [])

  const handleCheckChange = (itemId) => {
    const newStatus = {
      ...checkedItems,
      [itemId]: !checkedItems[itemId]
    }
    setCheckedItems(newStatus)
    setTestStatus(newStatus)
  }

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all test status?')) {
      resetTestStatus()
      setCheckedItems({})
    }
  }

  const passedCount = Object.values(checkedItems).filter(Boolean).length
  const totalCount = testItems.length
  const allPassed = passedCount === totalCount

  return (
    <div className="test-checklist-page">
      <div className="test-header">
        <h1 className="test-title">Test Checklist</h1>
        <p className="test-subtitle">Verify all features before shipping</p>
      </div>

      <div className="test-summary">
        <div className="test-summary-content">
          <span className="test-count">Tests Passed: {passedCount} / {totalCount}</span>
          {!allPassed && (
            <span className="test-warning">Resolve all issues before shipping.</span>
          )}
          {allPassed && (
            <span className="test-success">✓ All tests passed! Ready to ship.</span>
          )}
        </div>
        <Button variant="secondary" onClick={handleReset}>
          Reset Test Status
        </Button>
      </div>

      <div className="test-checklist">
        {testItems.map(item => (
          <div key={item.id} className="test-item">
            <label className="test-item-label">
              <input
                type="checkbox"
                checked={checkedItems[item.id] || false}
                onChange={() => handleCheckChange(item.id)}
                className="test-checkbox"
              />
              <span className="test-item-text">{item.label}</span>
            </label>
            {item.tooltip && (
              <div className="test-tooltip">
                <span className="tooltip-icon">?</span>
                <div className="tooltip-content">{item.tooltip}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="test-actions">
        <p className="test-note">
          Complete all tests to unlock the Ship page.
        </p>
      </div>
    </div>
  )
}

export default TestChecklist
