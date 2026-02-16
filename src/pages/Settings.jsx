import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import './Settings.css'

function Settings() {
  const navigate = useNavigate()
  const [preferences, setPreferences] = useState({
    roleKeywords: '',
    preferredLocations: [],
    preferredMode: [],
    experienceLevel: '',
    skills: '',
    minMatchScore: 40
  })

  useEffect(() => {
    const saved = localStorage.getItem('jobTrackerPreferences')
    if (saved) {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('jobTrackerPreferences', JSON.stringify(preferences))
    alert('Preferences saved successfully!')
    navigate('/dashboard')
  }

  const handleLocationChange = (location) => {
    const updated = preferences.preferredLocations.includes(location)
      ? preferences.preferredLocations.filter(l => l !== location)
      : [...preferences.preferredLocations, location]
    setPreferences({...preferences, preferredLocations: updated})
  }

  const handleModeChange = (mode) => {
    const updated = preferences.preferredMode.includes(mode)
      ? preferences.preferredMode.filter(m => m !== mode)
      : [...preferences.preferredMode, mode]
    setPreferences({...preferences, preferredMode: updated})
  }

  const locations = ['Bangalore', 'Pune', 'Hyderabad', 'Mumbai', 'Noida', 'Chennai', 'Gurgaon', 'Mysore', 'Remote']

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Configure your job preferences for intelligent matching</p>
      </div>

      <div className="settings-content">
        <div className="settings-form">
          <Input
            label="Role Keywords (comma-separated)"
            placeholder="e.g., Frontend Developer, React Engineer, SDE"
            value={preferences.roleKeywords}
            onChange={(e) => setPreferences({...preferences, roleKeywords: e.target.value})}
          />

          <div className="input-wrapper">
            <label className="input-label">Preferred Locations</label>
            <div className="checkbox-group">
              {locations.map(location => (
                <label key={location} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences.preferredLocations.includes(location)}
                    onChange={() => handleLocationChange(location)}
                  />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="input-wrapper">
            <label className="input-label">Preferred Mode</label>
            <div className="checkbox-group">
              {['Remote', 'Hybrid', 'Onsite'].map(mode => (
                <label key={mode} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={preferences.preferredMode.includes(mode)}
                    onChange={() => handleModeChange(mode)}
                  />
                  <span>{mode}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="input-wrapper">
            <label className="input-label">Experience Level</label>
            <select 
              className="input-field"
              value={preferences.experienceLevel}
              onChange={(e) => setPreferences({...preferences, experienceLevel: e.target.value})}
            >
              <option value="">Select level</option>
              <option value="Fresher">Fresher</option>
              <option value="0-1">0-1 Years</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
            </select>
          </div>

          <Input
            label="Skills (comma-separated)"
            placeholder="e.g., React, JavaScript, Node.js, Python"
            value={preferences.skills}
            onChange={(e) => setPreferences({...preferences, skills: e.target.value})}
          />

          <div className="input-wrapper">
            <label className="input-label">
              Minimum Match Score: {preferences.minMatchScore}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={preferences.minMatchScore}
              onChange={(e) => setPreferences({...preferences, minMatchScore: parseInt(e.target.value)})}
              className="slider"
            />
            <div className="slider-labels">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>

          <div className="settings-actions">
            <Button variant="primary" onClick={handleSave}>Save Preferences</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
