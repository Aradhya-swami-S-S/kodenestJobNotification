import React, { useState } from 'react'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import './Settings.css'

function Settings() {
  const [preferences, setPreferences] = useState({
    roleKeywords: '',
    locations: '',
    mode: '',
    experienceLevel: ''
  })

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Configure your job preferences</p>
      </div>

      <div className="settings-content">
        <div className="settings-form">
          <Input
            label="Role Keywords"
            placeholder="e.g., Frontend Developer, React Engineer"
            value={preferences.roleKeywords}
            onChange={(e) => setPreferences({...preferences, roleKeywords: e.target.value})}
          />

          <Input
            label="Preferred Locations"
            placeholder="e.g., San Francisco, Remote, New York"
            value={preferences.locations}
            onChange={(e) => setPreferences({...preferences, locations: e.target.value})}
          />

          <div className="input-wrapper">
            <label className="input-label">Mode</label>
            <select 
              className="input-field"
              value={preferences.mode}
              onChange={(e) => setPreferences({...preferences, mode: e.target.value})}
            >
              <option value="">Select mode</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">Onsite</option>
            </select>
          </div>

          <div className="input-wrapper">
            <label className="input-label">Experience Level</label>
            <select 
              className="input-field"
              value={preferences.experienceLevel}
              onChange={(e) => setPreferences({...preferences, experienceLevel: e.target.value})}
            >
              <option value="">Select level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
              <option value="lead">Lead / Principal</option>
            </select>
          </div>

          <div className="settings-actions">
            <Button variant="primary">Save Preferences</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
